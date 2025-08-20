-- Simply ensure admin role exists for jeff@jbj6.com when they sign up
-- The system already has a handle_new_user trigger, so we just need to 
-- update the profile to admin role after they sign up normally

-- Create a function to set a user as admin by email
CREATE OR REPLACE FUNCTION set_user_as_admin(user_email text)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
AS $$
  UPDATE profiles 
  SET role = 'admin' 
  WHERE email = user_email;
$$;

-- Set jeff@jbj6.com as admin (this will work after they sign up)
SELECT set_user_as_admin('jeff@jbj6.com');