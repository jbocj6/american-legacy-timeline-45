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
          <h2 className="text-4xl font-space font-bold text-foreground mb-4">America First Priorities</h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
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
                <div className={`reform-icon mb-4 ${issue.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-space font-semibold text-foreground mb-3">{issue.title}</h3>
                <p className="text-muted-foreground font-inter leading-relaxed mb-4">{issue.description}</p>
                <button className="text-accent font-inter font-medium hover:text-accent/80 transition-colors">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IssuesCards;