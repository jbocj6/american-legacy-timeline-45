import { DollarSign, Shield, Scale, Flag, Users, FileText } from 'lucide-react';

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
        <div className="text-center mb-16">
          <h2 className="text-6xl font-space font-bold text-foreground mb-4">America First Priorities</h2>
          <p className="text-2xl font-inter text-muted-foreground max-w-2xl mx-auto">
            Fighting for the issues that matter most to conservative families and communities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default IssuesCards;