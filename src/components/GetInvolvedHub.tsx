import { useState } from 'react';
import { Calendar, Share2, DollarSign, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import DonateModal from './DonateModal';

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name and email address.",
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
  };

  return (
    <section id="get-involved" className="bg-secondary py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space font-bold text-secondary-foreground mb-4">Stay Connected</h2>
          <p className="text-lg font-inter text-secondary-foreground/80 max-w-2xl mx-auto">
            Subscribe to our newsletter to stay informed about our conservative movement and important updates from our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Volunteer Form */}
          <div className="bg-card p-8 rounded-lg border border-border shadow-xl">
            <h3 className="text-2xl font-space font-semibold text-foreground mb-6 flex items-center">
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


              <button
                type="submit"
                className="w-full donate-button"
              >
                SUBSCRIBE TO NEWSLETTER
              </button>
            </form>
          </div>

          {/* Ways to Get Involved */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <h4 className="text-xl font-space font-semibold text-foreground mb-4 flex items-center justify-center">
                <DollarSign className="w-5 h-5 mr-3 text-accent" />
                Support the Cause
              </h4>
              <p className="text-muted-foreground font-inter mb-4">
                Your financial support helps us reach more voters and spread our conservative message.
              </p>
              <button 
                onClick={() => setIsDonateModalOpen(true)}
                className="donate-button"
              >
                DONATE NOW
              </button>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="text-xl font-space font-semibold text-foreground mb-4 flex items-center">
                <Share2 className="w-5 h-5 mr-3 text-accent" />
                Spread the Word
              </h4>
              <p className="text-muted-foreground font-inter mb-4">
                Share our message on social media and help us reach more conservative voters.
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm">
                  Share on Facebook
                </button>
                <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm">
                  Share on Twitter
                </button>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="text-xl font-space font-semibold text-foreground mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-accent" />
                Attend Events
              </h4>
              <p className="text-muted-foreground font-inter mb-4">
                Join us at town halls, rallies, and community events to meet fellow patriots.
              </p>
              <button className="donate-button" style={{background: 'transparent', border: '2px solid hsl(var(--accent))', boxShadow: '0 0 20px hsl(var(--accent) / 0.2)'}}>
                VIEW EVENTS
              </button>
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