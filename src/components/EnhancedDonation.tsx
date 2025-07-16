import { useState } from 'react';
import { CreditCard, Shield, Heart, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EnhancedDonation = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    employer: '',
    occupation: ''
  });
  const { toast } = useToast();

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount || parseFloat(customAmount);
    
    if (!amount || amount < 1) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive"
      });
      return;
    }

    if (!donorInfo.name || !donorInfo.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Thank you for your support!",
      description: `Your ${isRecurring ? 'monthly ' : ''}donation of $${amount} helps our conservative movement.`,
    });
  };

  return (
    <section id="support-mission" className="bg-muted py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-space font-bold text-foreground mb-4">Support Our Mission</h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
            Your contribution helps us fight for conservative values, constitutional rights, and government accountability.
          </p>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border shadow-xl">
          <form onSubmit={handleDonate} className="space-y-8">
            {/* Amount Selection */}
            <div>
              <h3 className="text-xl font-space font-semibold text-foreground mb-6 flex items-center">
                <Heart className="w-5 h-5 mr-3 text-accent" />
                Donation Amount
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-4 rounded-lg border-2 transition-all font-medium ${
                      selectedAmount === amount
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="text-muted-foreground">$</span>
                </div>
                <input
                  type="number"
                  placeholder="Other amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  min="1"
                />
              </div>

              <div className="mt-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                    className="w-4 h-4 text-accent bg-input border-border rounded focus:ring-accent"
                  />
                  <span className="ml-3 text-foreground font-medium">
                    Make this a monthly recurring donation
                  </span>
                </label>
                <p className="text-sm text-muted-foreground ml-7 mt-1">
                  Recurring donations help us plan our conservative advocacy efforts
                </p>
              </div>
            </div>

            {/* Donor Information */}
            <div>
              <h3 className="text-xl font-space font-semibold text-foreground mb-6 flex items-center">
                <CreditCard className="w-5 h-5 mr-3 text-accent" />
                Donor Information
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={donorInfo.name}
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
                    value={donorInfo.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Employer
                  </label>
                  <input
                    type="text"
                    name="employer"
                    value={donorInfo.employer}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Enter employer name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Occupation
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    value={donorInfo.occupation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Enter your occupation"
                  />
                </div>
              </div>
            </div>

            {/* FEC Compliance */}
            <div className="bg-muted p-6 rounded-lg border border-border">
              <h4 className="font-space font-semibold text-foreground mb-3 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-accent" />
                FEC Compliance Information
              </h4>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• Federal law requires us to report the name, mailing address, occupation, and employer of individuals whose contributions exceed $200 per election cycle.</p>
                <p>• By proceeding with this contribution, you confirm that this contribution is made from your own funds and not from funds provided to you by another person.</p>
                <p>• Corporate contributions are prohibited.</p>
                <p>• Contributions are not tax-deductible for federal income tax purposes.</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="donate-button px-12 py-4 text-lg"
              >
                <CheckCircle className="w-5 h-5 mr-3 inline" />
                SECURE DONATION
              </button>
              <p className="text-sm text-muted-foreground mt-3">
                Secure donation processed by WinRed • SSL encrypted
              </p>
            </div>
          </form>
        </div>

        {/* Footer Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Paid for by Jeff Brown for Congress • Not authorized by any candidate or candidate's committee
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnhancedDonation;