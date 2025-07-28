import { useState } from 'react';
import { Calendar, Share2, DollarSign, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import DonateModal from './DonateModal';
import { sanitizeInput, validateEmail, validatePhone, validateZip, validateName, checkRateLimit } from '@/utils/security';
import { supabase } from '@/integrations/supabase/client';

const GetInvolvedHub = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    interests: [] as string[]
  });
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const { toast } = useToast();


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData({
      ...formData,
      [name]: sanitizedValue
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!checkRateLimit('newsletter-signup', 3, 300000)) { // 3 attempts per 5 minutes
      toast({
        title: "Too Many Attempts",
        description: "Please wait a few minutes before trying again.",
        variant: "destructive"
      });
      return;
    }
    
    // Input validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }
    
    if (!validateName(formData.name)) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (letters, spaces, hyphens, and apostrophes only).",
        variant: "destructive"
      });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number.",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.zip && !validateZip(formData.zip)) {
      toast({
        title: "Invalid ZIP Code",
        description: "Please enter a valid ZIP code (12345 or 12345-6789).",
        variant: "destructive"
      });
      return;
    }

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('newsletter_signups')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          zip: formData.zip || null,
        });

      if (error) {
        toast({
          title: "Subscription Failed",
          description: "There was an error subscribing to the newsletter. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter. You'll receive updates soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        zip: '',
        interests: []
      });
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="get-involved" className="bg-secondary py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-space font-bold text-secondary-foreground mb-6 max-md:text-4xl max-sm:text-3xl">Stay Connected</h2>
          <p className="text-2xl font-inter text-secondary-foreground/80 max-w-2xl mx-auto">
            Subscribe to our newsletter to stay informed about our conservative movement and important updates from our community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Volunteer Form */}
          <div className="bg-card p-8 rounded-lg border border-border shadow-xl h-fit">
            <h3 className="text-2xl font-space font-semibold text-foreground mb-6 flex items-center justify-center">
              <Mail className="w-6 h-6 mr-3 text-accent" />
              Newsletter Sign-Up
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="(555) 123-4567 (optional)"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="12345 (optional)"
                  />
                </div>
              </div>


              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="w-full donate-button"
                >
                  SUBSCRIBE TO NEWSLETTER
                </button>
              </div>
            </form>
          </div>

          {/* Ways to Get Involved */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <h4 className="text-xl font-space font-semibold text-foreground mb-4 flex items-center justify-center">
                <DollarSign className="w-5 h-5 mr-3 text-accent" />
                Support the Cause
              </h4>
              <button 
                onClick={() => setIsDonateModalOpen(true)}
                className="donate-button"
              >
                DONATE NOW
              </button>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <h4 className="text-xl font-space font-semibold text-foreground mb-4 flex items-center justify-center">
                <Share2 className="w-5 h-5 mr-3 text-accent" />
                Join the Conversation
              </h4>
              <p className="text-muted-foreground font-inter mb-4">
                Get exclusive updates from Jeffrey himself
              </p>
              <div className="flex gap-4 justify-center">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/jeffreybrownj6/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* X (Twitter) */}
                <a 
                  href="https://x.com/jeffreybrownj6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                {/* Truth Social */}
                <a 
                  href="https://truthsocial.com/@jeffreybrownj6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v4H14v12h-4V8H4V4z"/>
                    <rect x="16" y="14" width="4" height="4" fill="currentColor"/>
                  </svg>
                </a>
                
                {/* Rumble */}
                <a 
                  href="https://rumble.com/user/Jeffreybrownj6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <DonateModal 
        isOpen={isDonateModalOpen} 
        onOpenChange={setIsDonateModalOpen} 
      />
    </section>
  );
};

export default GetInvolvedHub;