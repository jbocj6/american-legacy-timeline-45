import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface DonateModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonateModal = ({ isOpen, onOpenChange }: DonateModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-background border border-border">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="animate-float text-5xl font-space font-bold text-foreground mb-8">
              🇺🇸 Donate Now 🇺🇸
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center p-6">
          {/* Cash App - Red Envelope (Left) */}
          <div className="qr-card group">
            <img 
              src="/lovable-uploads/420ff39e-62d5-4c12-9574-d84f02460858.png" 
              alt="Cash App QR Code" 
              className="w-48 h-48 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20"
            />
          </div>

          {/* Venmo - White Envelope (Center) */}
          <div className="qr-card group">
            <img 
              src="/lovable-uploads/47b0e0a6-ce08-4dfa-9fee-8c3770a6a8b9.png" 
              alt="Venmo QR Code" 
              className="w-48 h-48 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20"
            />
          </div>

          {/* Give Send Go - Blue Envelope (Right) */}
          <div className="qr-card group">
            <img 
              src="/lovable-uploads/abb6f57c-b8f2-4420-9f1c-ccb0b4d313a2.png" 
              alt="Give Send Go QR Code" 
              className="w-48 h-48 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonateModal;