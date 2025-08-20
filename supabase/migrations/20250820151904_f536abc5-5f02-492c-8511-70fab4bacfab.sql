-- Fix the function security issue by setting proper search_path
CREATE OR REPLACE FUNCTION set_user_as_admin(user_email text)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path TO ''
AS $$
  UPDATE public.profiles 
  SET role = 'admin' 
  WHERE email = user_email;
$$;