-- Update bhogan@revgenengines.com to admin role
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'bhogan@revgenengines.com';