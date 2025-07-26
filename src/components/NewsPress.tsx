import { Calendar, ExternalLink, Newspaper } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const NewsPress = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const newsItems = [
    {
      title: "Trump Signs Historic $170B Conservative Victory Package",
      date: "July 25, 2025",
      excerpt: "President Trump transforms July 4th into policy triumph with sweeping tax cuts and border security funding.",
      category: "POLICY WIN",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Conservative Coalition Grows Stronger",
      date: "January 15, 2025", 
      excerpt: "Local and national conservative leaders unite behind America First principles and constitutional governance.",
      category: "Politics",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fighting Government Weaponization",
      date: "January 10, 2025",
      excerpt: "New initiatives to prevent federal agencies from being used against American citizens exercising their rights.",
      category: "Policy",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Election Integrity Remains Priority",
      date: "January 5, 2025",
      excerpt: "Continued advocacy for transparent, secure elections and addressing constitutional violations in voting processes.",
      category: "Elections",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="news" className="bg-background py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-space font-bold text-foreground mb-4">Latest News & Updates</h2>
          <p className="text-2xl font-inter text-muted-foreground max-w-2xl mx-auto">
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
                {index === 0 ? (
                  <img 
                    src="/lovable-uploads/44f76c58-3193-4e9c-bfbf-b21cbf3e5b1a.png" 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
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
                
                <button 
                  onClick={index === 0 ? () => setIsModalOpen(true) : undefined}
                  className="flex items-center text-accent font-inter font-medium hover:text-accent/80 transition-colors"
                >
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

      {/* Article Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-space font-bold text-foreground mb-4">
              Trump's Big Beautiful Bill: The Conservative Victory America Needed
            </DialogTitle>
          </DialogHeader>
          
          <div className="prose prose-lg max-w-none text-foreground">
            {/* Hero Image */}
            <div className="w-full h-80 rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/44f76c58-3193-4e9c-bfbf-b21cbf3e5b1a.png" 
                alt="President Trump signing legislation"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 5%' }}
              />
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">The Independence Day That Changed Everything</h2>
            
            <p className="mb-4">
              On July 4th, 2025, President Donald J. Trump delivered what conservative leaders are calling the most significant policy victory in three decades. The "One Big Beautiful Bill" – a $170.7 billion legislative package – fundamentally reshapes America's tax code, border security, and education system.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "There could be no better birthday present for America than the phenomenal victory we achieved just hours ago," Trump declared to a roaring crowd of over 50,000 patriots gathered at the Iowa State Fairgrounds.
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">What's In The Bill That Has Liberals Panicking</h2>
            
            {/* Infographic Placeholder */}
            <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center mb-4">
              <div className="text-muted-foreground text-center p-4">
                <p className="italic">Bar chart showing $170.7B breakdown - $46.6B border wall, $124.1B total immigration, tax cuts visualization</p>
              </div>
            </div>
            
            <p className="mb-4">The comprehensive package delivers on every major conservative promise:</p>
            
            <h3 className="text-xl font-semibold mb-3">Tax Relief for Working Americans</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">Eliminates taxes on tips</strong> – helping millions of service workers keep their hard-earned money</li>
              <li><strong className="text-primary">Zero tax on overtime pay</strong> – rewarding Americans who work extra hours</li>
              <li><strong className="text-primary">No more taxes on Social Security benefits</strong> – protecting our seniors</li>
              <li><strong className="text-primary">Permanent extension of Trump's 2017 tax cuts</strong> – keeping more money in your pocket</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Border Security That Actually Works</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">$46.6 billion for border wall construction</strong> – more than triple Trump's first-term spending</li>
              <li><strong className="text-primary">$124.1 billion total for immigration enforcement</strong> – funding detention of 116,000 illegal aliens daily</li>
              <li><strong className="text-primary">Complete defunding of sanctuary cities</strong> – no more taxpayer money for lawless jurisdictions</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Education Freedom Expands</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">School choice provisions for low-income families</strong> – parents, not bureaucrats, control education dollars</li>
              <li><strong className="text-primary">Protection for religious schools</strong> – defending faith-based education from government interference</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">Second Amendment Victories Hidden in Plain Sight</h2>
            
            {/* Gun Rights Image Placeholder */}
            <div className="w-full h-40 bg-muted rounded-lg flex items-center justify-center mb-4">
              <div className="text-muted-foreground text-center p-4">
                <p className="italic">Split screen - NRA executives on one side, firearms/suppressors on other side</p>
              </div>
            </div>
            
            <p className="mb-4">While mainstream media focused on the spending totals, gun rights advocates celebrated provisions that dismantle century-old restrictions:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">Elimination of $200 tax stamps</strong> on suppressors and short-barreled rifles</li>
              <li><strong className="text-primary">Streamlined background checks</strong> for law-abiding citizens</li>
              <li><strong className="text-primary">Protection from ATF overreach</strong> through new oversight provisions</li>
            </ul>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              NRA Executive Vice President Doug Hamlin didn't mince words: "Promises made to law-abiding gun owners are being kept by President Donald J. Trump."
            </blockquote>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default NewsPress;