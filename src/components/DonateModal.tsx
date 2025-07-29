import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface DonateModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonateModal = ({ isOpen, onOpenChange }: DonateModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[90vh] sm:max-w-4xl bg-background border border-border overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="animate-float text-3xl sm:text-5xl font-space font-bold text-foreground mb-4 sm:mb-8">
              🇺🇸 Donate Now 🇺🇸
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-12 items-center justify-center p-2 sm:p-8">
          {/* Cash App - Red Envelope (Left) */}
          <div className="qr-card group">
            <a 
              href="https://cash.app/$JeffreyBrownJ6?qr=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/lovable-uploads/420ff39e-62d5-4c12-9574-d84f02460858.png" 
                alt="Cash App QR Code" 
                className="w-40 h-40 sm:w-64 sm:h-64 object-contain rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/30 cursor-pointer"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </a>
          </div>

          {/* Venmo - White Envelope (Center) */}
          <div className="qr-card group">
            <img 
              src="/lovable-uploads/47b0e0a6-ce08-4dfa-9fee-8c3770a6a8b9.png" 
              alt="Venmo QR Code" 
              className="w-40 h-40 sm:w-64 sm:h-64 object-contain rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/30"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>

          {/* Give Send Go - Blue Envelope (Right) */}
          <div className="qr-card group">
            <img 
              src="/lovable-uploads/abb6f57c-b8f2-4420-9f1c-ccb0b4d313a2.png" 
              alt="Give Send Go QR Code" 
              className="w-40 h-40 sm:w-64 sm:h-64 object-contain rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/30"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonateModal;