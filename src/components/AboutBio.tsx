import { Shield, Star, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import DonateModal from './DonateModal';

const AboutBio = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add('animate-slide-in-left');
            }
            if (entry.target === cardsRef.current) {
              const cards = entry.target.querySelectorAll('.achievement-card');
              cards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('animate-highlight-glow');
                }, index * 200);
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-8 mt-20 max-md:py-16 max-md:px-4 max-md:mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-md:grid-cols-1 max-md:gap-8">
          {/* Professional headshot placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative" ref={imageRef}>
              <div className="w-full h-96 bg-gradient-to-br from-secondary to-primary rounded-lg shadow-xl overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/sGWBBTqWJN8?autoplay=0&controls=1&rel=0" 
                  title="America - YouTube Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg z-10">
                <Star className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Bio content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-space font-bold text-foreground mb-6 max-md:text-3xl max-md:mb-4 max-sm:text-2xl max-sm:mb-3">Meet Jeff Brown</h2>
            <div className="space-y-6">
              <p className="text-lg font-inter text-foreground leading-relaxed">
                Jeff Brown is a dedicated conservative leader who has spent his life serving America and defending the Constitution. 
                As a patriot and advocate for traditional values, Jeff understands what it means to stand up for what's right, 
                even when facing adversity.
              </p>
              
              <p className="text-lg font-inter text-foreground leading-relaxed">
                His experience on January 6th exemplifies the broader struggle facing conservative Americans today – the weaponization 
                of government against those who dare to question the establishment and fight for election integrity.
              </p>

              {/* Key accomplishments */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8 max-sm:grid-cols-1 max-sm:gap-3 max-sm:mt-6" ref={cardsRef}>
                <div className="achievement-card flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <Shield className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-space font-semibold text-foreground">Constitutional Defender</h4>
                    <p className="text-sm text-muted-foreground">Fighting for First Amendment rights</p>
                  </div>
                </div>
                
                <div className="achievement-card flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <Users className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-space font-semibold text-foreground">Community Leader</h4>
                    <p className="text-sm text-muted-foreground">Advocating for working families</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button 
                  className="donate-button"
                  onClick={() => setIsDonateModalOpen(true)}
                >
                  DONATE
                </button>
                <button 
                  className="donate-button" 
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)', 
                    border: '2px solid hsl(var(--accent))', 
                    boxShadow: '0 0 20px hsl(var(--accent) / 0.2)', 
                    color: 'white',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  BOOK A ONE-ON-ONE
                </button>
              </div>
            </div>
          </div>
        </div>

        <DonateModal 
          isOpen={isDonateModalOpen}
          onOpenChange={setIsDonateModalOpen}
        />
      </div>
    </section>
  );
};

export default AboutBio;