-- Create role enum for type safety
CREATE TYPE public.user_role AS ENUM ('admin', 'user');

-- Add role column to profiles table
ALTER TABLE public.profiles ADD COLUMN role public.user_role NOT NULL DEFAULT 'user';

-- Create security definer function to check admin role (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID DEFAULT auth.uid())
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = $1 AND profiles.role = 'admin'
  );
$$;

-- Update newsletter_signups RLS policies to require admin role
DROP POLICY IF EXISTS "Authenticated users can view newsletter signups" ON public.newsletter_signups;

CREATE POLICY "Only admins can view newsletter signups" 
ON public.newsletter_signups 
FOR SELECT 
USING (public.is_admin());

-- Add admin-only policies for newsletter management
CREATE POLICY "Only admins can update newsletter signups" 
ON public.newsletter_signups 
FOR UPDATE 
USING (public.is_admin());

CREATE POLICY "Only admins can delete newsletter signups" 
ON public.newsletter_signups 
FOR DELETE 
USING (public.is_admin());

-- Update profiles table policies to allow admins to view all profiles
CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (
  auth.uid() = user_id OR public.is_admin()
);

-- Allow admins to update user roles
CREATE POLICY "Admins can update any profile" 
ON public.profiles 
FOR UPDATE 
USING (public.is_admin());

-- Create trigger to automatically set first user as admin
CREATE OR REPLACE FUNCTION public.set_first_user_as_admin()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if this is the first user in the profiles table
  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE role = 'admin') THEN
    NEW.role = 'admin';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger on profiles insert
DROP TRIGGER IF EXISTS set_first_admin_trigger ON public.profiles;
CREATE TRIGGER set_first_admin_trigger
  BEFORE INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.set_first_user_as_admin();