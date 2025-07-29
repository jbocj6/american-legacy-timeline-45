import { DollarSign, Shield, Scale, Flag, Users, FileText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const IssuesCards = () => {
  const issues = [
    {
      icon: DollarSign,
      title: "Economy & Jobs",
      description: "Cut taxes, reduce regulations, and bring good-paying jobs back to hardworking American families.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Border Security", 
      description: "Secure our border, enforce our laws, and protect American workers from unfair competition.",
      color: "text-primary"
    },
    {
      icon: Scale,
      title: "Constitutional Rights",
      description: "Defend the Second Amendment and protect our constitutional freedoms from government overreach.",
      color: "text-accent"
    },
    {
      icon: Flag,
      title: "Supporting Veterans",
      description: "Honor our veterans with the care and support they've earned through their service to our nation.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Family Values",
      description: "Strengthen families and protect traditional values that have made America strong for generations.",
      color: "text-accent"
    },
    {
      icon: FileText,
      title: "Government Accountability",
      description: "End corruption, drain the swamp, and restore transparency to our democratic institutions.",
      color: "text-primary"
    }
  ];

  return (
    <section id="issues" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-md:mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <Flag className="w-8 h-8 text-destructive" />
            <span className="text-sm font-space uppercase tracking-widest text-destructive font-bold">AMERICA FIRST</span>
          </div>
          <h2 className="text-6xl font-space font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">America First Priorities</h2>
          <p className="text-2xl font-inter text-muted-foreground max-w-2xl mx-auto">
            Fighting for the issues that matter most to conservative families and communities
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mx-auto max-w-6xl">
          {issues.map((issue, index) => {
            const IconComponent = issue.icon;
            return (
              <div 
                key={issue.title} 
                className="reform-card group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {issue.title === "Economy & Jobs" ? (
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/b1c70ea5-f3bb-4d74-a19e-f39d7b53ebce.png" 
                      alt="Economy & Jobs" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                ) : issue.title === "Border Security" ? (
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/c79c0714-78b4-477d-9dac-6f3d6bd158a6.png" 
                      alt="Border Security" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                ) : issue.title === "Constitutional Rights" ? (
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/aaacfd3d-76e0-453c-9f4b-a2a752d06a89.png" 
                      alt="Constitutional Rights" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                ) : issue.title === "Supporting Veterans" ? (
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/cd8c4bf9-bc78-405f-917b-2d7ab8c1a18d.png" 
                      alt="Supporting Veterans" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                ) : issue.title === "Family Values" ? (
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/b67b9d15-3051-4348-b356-d760c90448e3.png" 
                      alt="Family Values" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                ) : issue.title === "Government Accountability" ? (
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/45098e7b-92c4-443a-a471-829b89780f13.png" 
                      alt="Government Accountability" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className={`reform-icon mb-4 ${issue.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                )}
                <h3 className="text-xl font-space font-semibold text-foreground mb-3">{issue.title}</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">{issue.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {issues.map((issue, index) => {
              const getImageSrc = (title: string) => {
                switch (title) {
                  case "Economy & Jobs": return "/lovable-uploads/b1c70ea5-f3bb-4d74-a19e-f39d7b53ebce.png";
                  case "Border Security": return "/lovable-uploads/c79c0714-78b4-477d-9dac-6f3d6bd158a6.png";
                  case "Constitutional Rights": return "/lovable-uploads/aaacfd3d-76e0-453c-9f4b-a2a752d06a89.png";
                  case "Supporting Veterans": return "/lovable-uploads/cd8c4bf9-bc78-405f-917b-2d7ab8c1a18d.png";
                  case "Family Values": return "/lovable-uploads/b67b9d15-3051-4348-b356-d760c90448e3.png";
                  case "Government Accountability": return "/lovable-uploads/45098e7b-92c4-443a-a471-829b89780f13.png";
                  default: return "";
                }
              };

              return (
                <AccordionItem key={issue.title} value={`item-${index}`} className="border border-border rounded-lg group">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline [&>svg]:hidden">
                    <div className="flex flex-col items-center text-center w-full">
                      <img 
                        src={getImageSrc(issue.title)} 
                        alt={issue.title} 
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                      <div className="flex items-center justify-center w-full relative">
                        <h3 className="text-lg font-space font-bold text-foreground">{issue.title}</h3>
                        <svg className="h-4 w-4 shrink-0 transition-transform duration-200 absolute right-0 group-data-[state=open]:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground font-inter leading-relaxed">{issue.description}</p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default IssuesCards;