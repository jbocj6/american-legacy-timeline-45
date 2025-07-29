-- Fix function security warnings by setting proper search_path

-- Update is_admin function with proper search_path
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID DEFAULT auth.uid())
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = ''
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = $1 AND profiles.role = 'admin'
  );
$$;

-- Update set_first_user_as_admin function with proper search_path
CREATE OR REPLACE FUNCTION public.set_first_user_as_admin()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  -- Check if this is the first user in the profiles table
  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE role = 'admin') THEN
    NEW.role = 'admin';
  END IF;
  RETURN NEW;
END;
$$;