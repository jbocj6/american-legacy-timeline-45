import { Shield, Star, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

const AboutBio = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
    <section className="bg-background py-24 px-8 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional headshot placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative" ref={imageRef}>
              <div className="w-full h-96 bg-gradient-to-br from-secondary to-primary rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/d78a7ad7-78ed-43b8-8e74-213b83340d79.png" 
                  alt="Jeff Brown - Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                <Star className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Bio content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-space font-bold text-foreground mb-6">Meet Jeff Brown</h2>
            <div className="space-y-6">
              <p className="text-lg font-inter text-muted-foreground leading-relaxed">
                Jeff Brown is a dedicated conservative leader who has spent his life serving America and defending the Constitution. 
                As a patriot and advocate for traditional values, Jeff understands what it means to stand up for what's right, 
                even when facing adversity.
              </p>
              
              <p className="text-lg font-inter text-muted-foreground leading-relaxed">
                His experience on January 6th exemplifies the broader struggle facing conservative Americans today – the weaponization 
                of government against those who dare to question the establishment and fight for election integrity.
              </p>

              {/* Key accomplishments */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8" ref={cardsRef}>
                <div className="achievement-card flex items-center space-x-3 p-4 bg-card rounded-lg border border-border">
                  <Shield className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-space font-semibold text-foreground">Constitutional Defender</h4>
                    <p className="text-sm text-muted-foreground">Fighting for First Amendment rights</p>
                  </div>
                </div>
                
                <div className="achievement-card flex items-center space-x-3 p-4 bg-card rounded-lg border border-border">
                  <Users className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-space font-semibold text-foreground">Community Leader</h4>
                    <p className="text-sm text-muted-foreground">Advocating for working families</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="donate-button">LEARN MORE</button>
                <button className="donate-button" style={{background: 'transparent', border: '2px solid hsl(var(--accent))', boxShadow: '0 0 20px hsl(var(--accent) / 0.2)'}}>
                  CONTACT JEFF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBio;