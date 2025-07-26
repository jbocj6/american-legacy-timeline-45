/**
 * Security utilities for input validation and sanitization
 */

// XSS Protection - Sanitize input to prevent script injection
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Email validation with stricter security
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Phone number validation
export const validatePhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, '');
  return cleanPhone.length >= 10 && cleanPhone.length <= 15;
};

// ZIP code validation
export const validateZip = (zip: string): boolean => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zip);
};

// Name validation - prevent malicious input
export const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s'-]{1,50}$/;
  return nameRegex.test(name);
};

// Amount validation for donations
export const validateDonationAmount = (amount: number): boolean => {
  return amount > 0 && amount <= 50000 && Number.isFinite(amount);
};

// Rate limiting simulation (client-side basic protection)
const rateLimitStore = new Map<string, { count: number; lastReset: number }>();

export const checkRateLimit = (identifier: string, maxRequests: number = 5, windowMs: number = 60000): boolean => {
  const now = Date.now();
  const userLimits = rateLimitStore.get(identifier) || { count: 0, lastReset: now };
  
  // Reset if window has passed
  if (now - userLimits.lastReset > windowMs) {
    userLimits.count = 0;
    userLimits.lastReset = now;
  }
  
  userLimits.count++;
  rateLimitStore.set(identifier, userLimits);
  
  return userLimits.count <= maxRequests;
};

// Content Security Policy headers (for reference - needs server implementation)
export const CSP_HEADER = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https:;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
`.replace(/\s+/g, ' ').trim();