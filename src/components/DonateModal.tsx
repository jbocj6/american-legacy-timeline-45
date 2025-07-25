import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface DonateModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonateModal = ({ isOpen, onOpenChange }: DonateModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background border border-border">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="animate-float text-3xl font-space font-bold text-foreground mb-6">
              🇺🇸 Donate Now 🇺🇸
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center p-4">
          {/* Cash App - Red Envelope (Left) */}
          <div className="qr-card group">
            <img 
              src="/lovable-uploads/7125b97b-0ed7-44a0-bcff-1b246a847fd9.png" 
              alt="Cash App QR Code" 
              className="w-32 h-32 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20"
            />
            <p className="text-center text-sm font-inter text-muted-foreground mt-2">Cash App</p>
          </div>

          {/* Venmo - White Envelope (Center) */}
          <div className="qr-card group">
            <img 
              src="/lovable-uploads/5528361e-a833-4c20-b162-683abf4fdb66.png" 
              alt="Venmo QR Code" 
              className="w-32 h-32 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20"
            />
            <p className="text-center text-sm font-inter text-muted-foreground mt-2">Venmo</p>
          </div>

          {/* Give Send Go - Blue Envelope (Right) */}
          <div className="qr-card group">
            <img 
              src="/lovable-uploads/083ed0d5-abf0-4c18-81ac-acdcb956776c.png" 
              alt="Give Send Go QR Code" 
              className="w-32 h-32 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20"
            />
            <p className="text-center text-sm font-inter text-muted-foreground mt-2">Give Send Go</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonateModal;