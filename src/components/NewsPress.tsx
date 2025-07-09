import { Calendar, ExternalLink, Newspaper } from 'lucide-react';

const NewsPress = () => {
  const newsItems = [
    {
      title: "Presidential Pardon Vindicates January 6th Patriots",
      date: "January 20, 2025",
      excerpt: "Historic presidential pardon recognizes the injustice faced by peaceful protesters and restores constitutional order.",
      category: "Breaking News",
      image: "/lovable-uploads/7fc79b02-bbe0-4a83-b9ac-b3ad6d4432b8.png"
    },
    {
      title: "Conservative Coalition Grows Stronger",
      date: "January 15, 2025", 
      excerpt: "Local and national conservative leaders unite behind America First principles and constitutional governance.",
      category: "Politics",
      image: "/lovable-uploads/a5f6b7c0-3d2d-4b86-97be-9c275654d4ca.png"
    },
    {
      title: "Fighting Government Weaponization",
      date: "January 10, 2025",
      excerpt: "New initiatives to prevent federal agencies from being used against American citizens exercising their rights.",
      category: "Policy",
      image: "/lovable-uploads/9bcbbf87-78c1-4886-974a-a70b2693bed9.png"
    },
    {
      title: "Election Integrity Remains Priority",
      date: "January 5, 2025",
      excerpt: "Continued advocacy for transparent, secure elections and addressing constitutional violations in voting processes.",
      category: "Elections",
      image: "/lovable-uploads/ca5fe2f6-c779-4681-a048-51e116c95850.png"
    }
  ];

  return (
    <section id="news" className="bg-background py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space font-bold text-foreground mb-4">Latest News & Updates</h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
            Stay informed on the latest developments in our fight for conservative values
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <article 
              key={item.title}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                
                <h3 className="text-xl font-space font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                
                <button className="flex items-center text-accent font-inter font-medium hover:text-accent/80 transition-colors">
                  Read Full Article
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="donate-button">
            <Newspaper className="w-5 h-5 mr-2 inline" />
            VIEW ALL NEWS
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsPress;