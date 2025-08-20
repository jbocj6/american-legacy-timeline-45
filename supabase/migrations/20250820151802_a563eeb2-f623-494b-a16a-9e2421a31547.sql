-- Create the admin user in auth.users and set up admin role
-- Note: We'll insert the user with a hashed password and set up the profile

-- First, let's create the is_admin function if it doesn't exist
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  );
$$;

-- Insert the admin user directly into auth.users
-- This requires elevated privileges but should work in migrations
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  role,
  aud,
  confirmation_token,
  email_change_token_new,
  recovery_token,
  email_change_token_current,
  email_change,
  email_change_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  phone,
  phone_confirmed_at,
  phone_change,
  phone_change_token,
  phone_change_sent_at,
  confirmed_at,
  email_change_confirm_status,
  banned_until,
  reauthentication_token,
  reauthentication_sent_at
) VALUES (
  gen_random_uuid(),
  '00000000-0000-0000-0000-000000000000',
  'jeff@jbj6.com',
  crypt('hrwT8''MTW''4e', gen_salt('bf')),
  now(),
  now(),
  now(),
  'authenticated',
  'authenticated',
  '',
  '',
  '',
  '',
  '',
  null,
  now(),
  '{"provider": "email", "providers": ["email"]}',
  '{}',
  false,
  null,
  null,
  '',
  '',
  null,
  now(),
  0,
  null,
  '',
  null
) ON CONFLICT (email) DO NOTHING;

-- Create the admin profile for this user
INSERT INTO profiles (user_id, email, role)
SELECT id, email, 'admin'
FROM auth.users 
WHERE email = 'jeff@jbj6.com'
ON CONFLICT (user_id) DO UPDATE SET role = 'admin';