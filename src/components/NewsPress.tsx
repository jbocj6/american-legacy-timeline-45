import { Calendar, ExternalLink, Newspaper } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const NewsPress = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const newsItems = [
    {
      title: "USAID Dismantled: Trump Redirects $40 Billion from Foreign Handouts to American Priorities",
      date: "July 25, 2025",
      excerpt: "State Department takes control as President ends decades of wasteful spending on nations that hate us.",
      category: "AMERICA FIRST",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Trump's Six-Month Border Miracle: From 251,487 to 6,000 Monthly Crossings",
      date: "July 18, 2025", 
      excerpt: "DHS reports historic enforcement success with 300,000 arrests, 99% drop in Darien Gap migration.",
      category: "BORDER SECURITY",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SCOTUS Sides with Parents Against LGBTQ Indoctrination in Schools",
      date: "July 11, 2025",
      excerpt: "Supreme Court delivers historic victory affirming parents' right to opt children out of controversial LGBTQ curriculum.",
      category: "RELIGIOUS LIBERTY",
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
                ) : index === 1 ? (
                  <img 
                    src="/lovable-uploads/81904e5f-18dc-4375-9dd4-75bd5d05cd40.png" 
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center top' }}
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
                  onClick={index === 0 ? () => setIsModalOpen(true) : index === 1 ? () => setIsSecondModalOpen(true) : index === 2 ? () => setIsThirdModalOpen(true) : undefined}
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
            <DialogTitle className="text-3xl font-space font-bold text-foreground mb-2 text-center">
              America First Foreign Policy: Trump Ends Billions in Wasteful Aid to Focus on Americans
            </DialogTitle>
            <div className="text-center text-muted-foreground font-inter mb-4">
              By Jeffrey Brown • July 25, 2025
            </div>
          </DialogHeader>
          
          <div className="prose prose-lg max-w-none text-foreground">
            {/* Metadata Box */}
            <div className="bg-accent/10 border border-accent p-6 mb-6 rounded-lg">
              <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold mb-3">
                AMERICA FIRST
              </div>
              <p><strong>Preview Title:</strong> USAID Dismantled: Trump Redirects $40 Billion from Foreign Handouts to American Priorities</p>
              <p><strong>Preview Summary:</strong> State Department takes control as President ends decades of wasteful spending on nations that hate us.</p>
            </div>

            <h2 className="text-2xl font-semibold text-primary mb-4">The Death of USAID: Taxpayers Finally Win</h2>
            
            {/* Hero Image Placeholder */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[HERO IMAGE NEEDED]</p>
                <p>USAID headquarters with "CLOSED" sign or being dismantled, American flag prominent</p>
                <p className="text-sm mt-2">Image source needed - Reuters/AP Photo</p>
              </div>
            </div>
            
            <p className="mb-4">
              In a historic victory for American taxpayers, the Trump administration officially shuttered the United States Agency for International Development (USAID) this month, ending decades of unchecked foreign handouts that cost hardworking Americans over $40 billion annually.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "President Trump stated clearly that the United States is no longer going to blindly dole out money with no return for the American people. Reviewing and realigning foreign assistance on behalf of hardworking taxpayers is not just the right thing to do, it is a moral imperative." - State Department Spokesperson Tammy Bruce
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">The Shocking Truth About Your Tax Dollars</h2>
            
            {/* Waste Infographic Placeholder */}
            <div className="w-full h-96 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[INFOGRAPHIC NEEDED]</p>
                <p>Visual showing $72 billion in 2023 foreign aid broken down by wasteful categories</p>
                <p className="text-sm mt-2">Create infographic using government data</p>
              </div>
            </div>
            
            <p className="mb-4">
              The United States was the largest single donor of aid globally. In fiscal year 2023 alone, it disbursed $72 billion in assistance. It provided 42% of all humanitarian aid tracked by the United Nations in 2024.
            </p>

            <div className="bg-accent/10 border border-accent p-6 mb-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Where Your Money Really Went:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-primary">$8 billion</strong> to Afghanistan since 2021 Taliban takeover</li>
                <li><strong className="text-primary">45%</strong> of Sudan's humanitarian aid while Americans suffered</li>
                <li><strong className="text-primary">$100 million</strong> in "condoms to Gaza" (Trump's January revelation)</li>
                <li><strong className="text-primary">Billions</strong> to corrupt regimes voting against us at the UN</li>
                <li><strong className="text-primary">Gender studies</strong> programs in Pakistan and Afghanistan</li>
                <li><strong className="text-primary">Climate change</strong> initiatives benefiting China</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">Secretary Rubio's America First Revolution</h2>
            
            {/* Rubio Image Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[IMAGE NEEDED]</p>
                <p>Secretary of State Marco Rubio at podium announcing foreign aid reforms</p>
                <p className="text-sm mt-2">Source needed - State Department Photo</p>
              </div>
            </div>
            
            <p className="mb-4">
              Secretary of State Marco Rubio has initiated a comprehensive review of all foreign assistance programs to ensure they are efficient and consistent with U.S. foreign policy under the America First agenda.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "Every dollar we spend, every program we fund, and every policy we pursue must be justified with the answer to three simple questions: Does it make America safer? Does it make America stronger? Does it make America more prosperous?" - Secretary Marco Rubio
            </blockquote>
          </div>
        </DialogContent>
      </Dialog>

      {/* Second Article Modal */}
      <Dialog open={isSecondModalOpen} onOpenChange={setIsSecondModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-space font-bold text-foreground mb-2 text-center">
              Border Crisis SOLVED: Six Months of Trump Enforcement Delivers Historic Results
            </DialogTitle>
            <div className="text-center text-muted-foreground font-inter mb-4">
              By Jeffrey Brown • July 18, 2025
            </div>
          </DialogHeader>
          
          <div className="prose prose-lg max-w-none text-foreground">
            {/* Metadata Box */}
            <div className="bg-accent/10 border border-accent p-6 mb-6 rounded-lg">
              <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold mb-3">
                BORDER SECURITY
              </div>
              <p><strong>Preview Title:</strong> Trump's Six-Month Border Miracle: From 251,487 to 6,000 Monthly Crossings</p>
              <p><strong>Preview Summary:</strong> DHS reports historic enforcement success with 300,000 arrests, 99% drop in Darien Gap migration.</p>
            </div>

            <h2 className="text-2xl font-semibold text-primary mb-4">From Biden's Chaos to Trump's Control in Just Six Months</h2>
            
            {/* Hero Image Placeholder */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[HERO IMAGE NEEDED]</p>
                <p>Split screen showing crowded border under Biden vs. controlled, secure border with new wall sections under Trump</p>
                <p className="text-sm mt-2">Image source needed - CBP Photo/Reuters</p>
              </div>
            </div>
            
            <p className="mb-4">
              The transformation at America's southern border is nothing short of miraculous. Just six months after President Trump returned to the White House, the Department of Homeland Security reports the lowest border crossing numbers in decades – a stunning reversal from the Biden-era invasion that threatened American sovereignty.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "This $165 billion in funding will help the Department of Homeland Security and our brave law enforcement further deliver on President Trump's mandate to arrest and deport criminal illegal aliens and MAKE AMERICA SAFE AGAIN!" - DHS Secretary Kristi Noem
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">The Numbers That Prove Trump's Success</h2>
            
            {/* Statistics Chart Placeholder */}
            <div className="w-full h-96 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[CHART NEEDED]</p>
                <p>Bar graph comparing Biden's peak 251,487 monthly crossings to Trump's 6,000 in June 2025</p>
                <p className="text-sm mt-2">Create chart using DHS data</p>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent p-6 mb-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Biden's Border Disaster:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong className="text-primary">251,487</strong> - Monthly crossings at peak (December 2023)</li>
                <li><strong className="text-primary">85%</strong> - Released into American communities</li>
                <li><strong className="text-primary">$72 billion</strong> - Cost to taxpayers annually</li>
                <li><strong className="text-primary">Zero</strong> - Miles of new wall built</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Trump's Border Victory (Six Months):</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-primary">6,000</strong> - Monthly crossings in June 2025</li>
                <li><strong className="text-primary">300,000+</strong> - Illegal aliens arrested in 2025</li>
                <li><strong className="text-primary">99%</strong> - Drop in Darien Gap migration</li>
                <li><strong className="text-primary">85+ miles</strong> - New wall under construction</li>
                <li><strong className="text-primary">ZERO</strong> - Parole releases in May and June</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">Ending Catch-and-Release: Promise Kept</h2>
            
            {/* ICE Operations Image Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[IMAGE NEEDED]</p>
                <p>ICE agents conducting arrest operations, professional law enforcement at work</p>
                <p className="text-sm mt-2">Source needed - ICE Photo</p>
              </div>
            </div>
            
            <p className="mb-4">
              In both May and June, U.S. Border Patrol reported zero parole releases—reinforcing the Administration's commitment to ending catch-and-release policies. This represents a complete reversal from Biden's open-border approach.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "The Trump Administration empowered our brave men and women in law enforcement to use common sense to do their jobs effectively," Secretary Noem stated.
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">Criminal Aliens Face Justice at Last</h2>
            
            {/* Deportation Statistics Graphic Placeholder */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[INFOGRAPHIC NEEDED]</p>
                <p>Visual showing 70% of ICE arrests are criminals, types of crimes, deportation numbers</p>
                <p className="text-sm mt-2">Create criminal alien statistics infographic</p>
              </div>
            </div>
            
            <p className="mb-4">
              The Trump administration has arrested more than 300,000 illegal aliens in 2025 alone. The crucial detail mainstream media won't report: <strong>70% of ICE arrests are criminal illegal aliens with criminal charges or convictions.</strong>
            </p>

            <h3 className="text-xl font-semibold mb-3">Criminals Being Removed Include:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Gang members from MS-13 and other violent organizations</li>
              <li>Drug traffickers poisoning American communities</li>
              <li>Human traffickers exploiting vulnerable people</li>
              <li>Violent felons previously protected by sanctuary cities</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4">The Darien Gap Miracle: 99% Drop</h2>
            
            {/* Darien Gap Map Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[MAP NEEDED]</p>
                <p>Map showing Darien Gap between Colombia and Panama with migration route and 99% drop notation</p>
                <p className="text-sm mt-2">Create Darien Gap migration map</p>
              </div>
            </div>
            
            <p className="mb-4">
              Perhaps the most stunning achievement: Migrants are turning BACK before they even reach our border. Migration through Panama's Darien Gap is down 99% - from tens of thousands monthly to a mere trickle.
            </p>
            
            <p className="mb-6">Why? Because the world knows: <strong>The free ride is over. America is closed to illegal entry.</strong></p>

            <h2 className="text-2xl font-semibold text-primary mb-4">The Wall Gets Built - Finally</h2>
            
            {/* Wall Construction Image Placeholder */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[IMAGE NEEDED]</p>
                <p>New border wall construction showing 30-foot steel barriers being installed</p>
                <p className="text-sm mt-2">Source needed - Construction photos</p>
              </div>
            </div>
            
            <p className="mb-4">
              President Trump—with $46.5 billion from the Big Beautiful Bill—is finishing the border wall. DHS already has more than 85 miles either planned or under construction with funding from the prior year, in addition to hundreds of miles that are now planned.
            </p>

            <div className="bg-accent/10 border border-accent p-6 mb-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Wall Construction Progress:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-primary">701 miles</strong> of primary walls to be completed</li>
                <li><strong className="text-primary">900 miles</strong> of river barriers planned</li>
                <li><strong className="text-primary">$46.6 billion</strong> allocated for construction</li>
                <li><strong className="text-primary">30-foot steel barriers</strong> with anti-climb technology</li>
                <li><strong className="text-primary">Advanced sensors</strong> and surveillance integration</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-primary mb-4">What This Means for American Communities</h2>
            
            {/* Safe Community Image Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[IMAGE NEEDED]</p>
                <p>Safe American neighborhood with families, American flags visible</p>
                <p className="text-sm mt-2">Source needed - Community stock photo</p>
              </div>
            </div>
            
            <p className="mb-4">The dramatic enforcement success translates to real benefits for Americans:</p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">Safer neighborhoods</strong> as criminal aliens are removed</li>
              <li><strong className="text-primary">Less strain</strong> on schools and hospitals</li>
              <li><strong className="text-primary">Lower crime rates</strong> in previously overwhelmed border towns</li>
              <li><strong className="text-primary">American jobs</strong> protected from illegal competition</li>
              <li><strong className="text-primary">Reduced drug flow</strong> saving American lives</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4">The Bottom Line: Sovereignty Restored</h2>
            
            <p className="mb-4">
              In just six months, President Trump has accomplished what the establishment said was impossible. The border is no longer a suggestion – it's a reality. The invasion has become a trickle. The cartels are on the run. Criminal aliens are being removed.
            </p>
            
            <p className="mb-4">
              This isn't just about numbers or statistics. It's about restoring the basic principle that a nation without borders is not a nation at all. It's about putting American safety, American workers, and American sovereignty first.
            </p>
            
            <p className="mb-6">The message to the world is clear: <strong>If you want to come to America, do it legally or don't come at all.</strong></p>

            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center mt-8">
              <p className="text-lg font-semibold">
                Share this incredible success story that mainstream media refuses to cover. Every American deserves to know: The border crisis is over because Donald Trump kept his promise.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Third Article Modal - Religious Freedom */}
      <Dialog open={isThirdModalOpen} onOpenChange={setIsThirdModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-space font-bold text-foreground mb-2 text-center">
              Supreme Court Delivers: Maryland Parents Win Huge Religious Liberty Victory
            </DialogTitle>
            <div className="text-center text-muted-foreground font-inter mb-4">
              By Jeffrey Brown • July 11, 2025
            </div>
          </DialogHeader>
          
          <div className="prose prose-lg max-w-none text-foreground">
            {/* Metadata Box */}
            <div className="bg-accent/10 border border-accent p-6 mb-6 rounded-lg">
              <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold mb-3">
                RELIGIOUS LIBERTY
              </div>
              <p><strong>Preview Title:</strong> SCOTUS Sides with Parents Against LGBTQ Indoctrination in Schools</p>
              <p><strong>Preview Summary:</strong> Supreme Court delivers historic victory affirming parents' right to opt children out of controversial LGBTQ curriculum.</p>
            </div>

            <h2 className="text-2xl font-semibold text-primary mb-4">Parents' Rights Triumph Over Woke School Agenda</h2>
            
            {/* Hero Image Placeholder */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[HERO IMAGE NEEDED]</p>
                <p>Diverse group of parents (Muslim, Christian, Jewish) celebrating outside Supreme Court building with "Parents' Rights" signs</p>
                <p className="text-sm mt-2">Image source needed - Reuters/AP Photo</p>
              </div>
            </div>
            
            <p className="mb-4">
              In a monumental victory for religious freedom and parental rights, the Supreme Court ruled decisively in favor of an interfaith group of Maryland parents in <em>Mahmoud v. Taylor</em>, affirming their right to opt their children out of classroom instruction containing LGBTQ+ themes that conflict with their religious beliefs.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "The U.S. Supreme Court's decision is a monumental victory for parents and their fundamental right to make decisions consistent with their religious beliefs about the upbringing and education of their children," declared Alliance Defending Freedom Senior Counsel John Bursch.
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">The Case That United Faiths Against Indoctrination</h2>
            
            {/* Book Covers Image Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[IMAGE NEEDED]</p>
                <p>Display of controversial children's books including "Uncle Bobby's Wedding" and other LGBTQ-themed titles</p>
                <p className="text-sm mt-2">Source needed - Court exhibit photos</p>
              </div>
            </div>
            
            <p className="mb-4">
              The case emerged when Maryland's Montgomery County Public Schools refused to allow parents to opt their children out of lessons featuring books with LGBTQ+ content, including titles like "Uncle Bobby's Wedding" – a story about two male penguins getting married.
            </p>
            
            <p className="mb-4">
              What made this case extraordinary was the coalition it formed: Muslim, Christian, and Jewish parents united in defense of their shared right to guide their children's moral and religious education.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Facts of the Case:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>School district mandated participation in LGBTQ-themed lessons</li>
              <li>Parents were denied opt-out options previously available</li>
              <li>Books targeted children as young as kindergarten</li>
              <li>Materials presented same-sex relationships as normative</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">Justice Alito's Powerful Defense of Parental Rights</h2>
            
            {/* Justice Alito Image Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[IMAGE NEEDED]</p>
                <p>Justice Samuel Alito in his Supreme Court robes</p>
                <p className="text-sm mt-2">Source needed - Supreme Court Photo</p>
              </div>
            </div>
            
            <p className="mb-4">
              Writing for the Court and quoting the 1972 case Wisconsin v. Yoder, Justice Samuel Alito explained that for students to opt out, the material must be presented in a way that is "hostile" to their religious beliefs and imposes a "pressure to conform."
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "The court made clear that parents don't surrender that right just because they use public schools," stated Mark Rienzi from Becket Fund for Religious Liberty.
            </blockquote>
            
            <p className="mb-6">
              Justice Alito specifically noted how "Uncle Bobby's Wedding" presented "a specific, if subtle, message about marriage. It asserts that two people can get married, regardless of whether they are of the same or the opposite sex, so long as they 'love each other.'"
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">The Coalition That Shocked the Left</h2>
            
            {/* Interfaith Coalition Image Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[IMAGE NEEDED]</p>
                <p>Muslim, Christian, and Jewish religious leaders standing together at press conference</p>
                <p className="text-sm mt-2">Source needed - News photography</p>
              </div>
            </div>
            
            <p className="mb-4">This wasn't just a Christian conservative victory – it was an interfaith triumph that united:</p>

            <div className="bg-accent/10 border border-accent p-6 mb-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Unprecedented Religious Coalition:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-primary">Muslim families</strong> defending Islamic teachings on marriage</li>
                <li><strong className="text-primary">Orthodox Jewish parents</strong> protecting Torah values</li>
                <li><strong className="text-primary">Catholic families</strong> upholding Church doctrine</li>
                <li><strong className="text-primary">Protestant Christians</strong> standing for Biblical truth</li>
                <li><strong className="text-primary">Ethiopian Orthodox</strong> preserving traditional values</li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "Government officials can't force parents to give up that right or violate their religious beliefs in exchange for a public education," Bursch emphasized.
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">Why This Victory Matters for Every American Parent</h2>
            
            {/* Parents Rights Graphic Placeholder */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[INFOGRAPHIC NEEDED]</p>
                <p>Visual showing parental rights protected by the decision - religious upbringing, moral education, curriculum oversight</p>
                <p className="text-sm mt-2">Create parental rights infographic</p>
              </div>
            </div>
            
            <p className="mb-4">The Supreme Court's decision reaffirms fundamental principles:</p>

            <h3 className="text-xl font-semibold mb-3">1. Parents Are Primary Educators</h3>
            <p className="mb-4">The Court recognized that parents, not government bureaucrats, have the primary right and responsibility to guide their children's moral and religious education.</p>

            <h3 className="text-xl font-semibold mb-3">2. Religious Freedom Isn't Negotiable</h3>
            <p className="mb-4">Public schools cannot force children to participate in instruction that violates their family's deeply held religious beliefs.</p>

            <h3 className="text-xl font-semibold mb-3">3. The First Amendment Still Matters</h3>
            <p className="mb-6">Despite the left's attempts to erode religious liberty, the Constitution's protections remain strong.</p>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">What This Means for Your Children</h2>
            
            {/* Classroom Image Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[IMAGE NEEDED]</p>
                <p>Elementary school classroom with traditional learning materials</p>
                <p className="text-sm mt-2">Source needed - Education stock photo</p>
              </div>
            </div>
            
            <p className="mb-4">Parents across America now have clear Supreme Court precedent protecting their rights:</p>

            <div className="bg-accent/10 border border-accent p-6 mb-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Your Protected Rights:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request to review all curriculum materials</li>
                <li>Opt children out of lessons conflicting with religious beliefs</li>
                <li>Challenge school policies that undermine parental authority</li>
                <li>Unite with other parents regardless of faith background</li>
                <li>Demand schools respect your role as primary educator</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">What You Can Do Now</h2>
            
            {/* Action Items Graphic Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[GRAPHIC NEEDED]</p>
                <p>Action steps for parents - review curriculum, know your rights, organize with others</p>
                <p className="text-sm mt-2">Create action items infographic</p>
              </div>
            </div>
            
            <p className="mb-4">This victory opens doors for parents nationwide:</p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">Review your school's curriculum</strong> – You have the right to know what's being taught</li>
              <li><strong className="text-primary">Request opt-out forms</strong> – Schools must now provide them for controversial content</li>
              <li><strong className="text-primary">Organize with other parents</strong> – Strength in numbers across faith lines</li>
              <li><strong className="text-primary">Contact ADF or Becket</strong> – If your school refuses to comply</li>
              <li><strong className="text-primary">Share this victory</strong> – Other parents need to know their rights</li>
            </ol>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">The Bottom Line: Parents Win, Woke Ideology Loses</h2>
            
            <p className="mb-4">
              For too long, radical activists have used public schools as laboratories for social experimentation on our children. They believed they could override parental authority and religious convictions with government mandates.
            </p>
            
            <p className="mb-4">The Supreme Court just said: <strong>Not on our watch.</strong></p>
            
            <p className="mb-4">
              This isn't about hate or discrimination – it's about the fundamental right of parents to raise their children according to their faith and values. Muslim parents, Jewish parents, Christian parents – all united in defending this basic freedom.
            </p>
            
            <p className="mb-6">The message is clear: Schools work for parents, not the other way around.</p>

            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center mt-8">
              <p className="text-lg font-semibold">
                This victory belongs to every parent who believes in religious freedom and parental rights. Share this article with other parents in your community. The fight for our children's hearts and minds continues – but today, freedom won.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Modal */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-7xl max-h-[95vh] p-2">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/e40a95ef-ccd1-4d5b-990c-f26de279e917.png" 
              alt="One Big Beautiful Bill - $170.7B Investment Breakdown"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default NewsPress;