import { useState } from 'react';
import { Users, Calendar, Share2, DollarSign, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GetInvolvedHub = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    interests: [] as string[]
  });
  const { toast } = useToast();

  const volunteerOptions = [
    { id: 'phonebank', label: 'Phone Banking', icon: Phone },
    { id: 'doorknocker', label: 'Door-to-Door Canvassing', icon: MapPin },
    { id: 'events', label: 'Event Organizing', icon: Calendar },
    { id: 'social', label: 'Social Media', icon: Share2 },
    { id: 'fundraising', label: 'Fundraising', icon: DollarSign },
    { id: 'newsletter', label: 'Newsletter & Communications', icon: Mail }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter(i => i !== interest)
        : [...formData.interests, interest]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill required fields",
        description: "Name and email are required to volunteer.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Thank you for volunteering!",
      description: "We'll be in touch soon with ways you can help our movement.",
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
          <h2 className="text-4xl font-space font-bold text-secondary-foreground mb-4">Join the Movement</h2>
          <p className="text-lg font-inter text-secondary-foreground/80 max-w-2xl mx-auto">
            Your voice matters. Join thousands of patriots fighting for conservative values and constitutional governance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Volunteer Form */}
          <div className="bg-card p-8 rounded-lg border border-border shadow-xl">
            <h3 className="text-2xl font-space font-semibold text-foreground mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-accent" />
              Volunteer Sign-Up
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
                    placeholder="(555) 123-4567"
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
                    placeholder="12345"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  How would you like to help? (Select all that apply)
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {volunteerOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <label
                        key={option.id}
                        className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.interests.includes(option.id)
                            ? 'border-accent bg-accent/10 text-accent'
                            : 'border-border hover:border-accent/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(option.id)}
                          onChange={() => handleInterestToggle(option.id)}
                          className="sr-only"
                        />
                        <IconComponent className="w-4 h-4 mr-3" />
                        <span className="text-sm font-medium">{option.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                className="w-full donate-button"
              >
                JOIN THE TEAM
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
                onClick={() => {
                  const footer = document.getElementById('footer') || document.querySelector('footer');
                  footer?.scrollIntoView({ behavior: 'smooth' });
                }}
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
    </section>
  );
};

export default GetInvolvedHub;