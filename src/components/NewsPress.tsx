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
      title: "SCOTUS Rules 7-2: Churches Can't Be Forced to Hire Against Their Beliefs",
      date: "July 11, 2025",
      excerpt: "Landmark decision protects faith-based organizations from government mandates in historic First Amendment victory.",
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
              Supreme Court Delivers: Religious Freedom Wins Big
            </DialogTitle>
            <div className="text-center text-muted-foreground font-inter mb-4">
              By Jeffrey Brown • July 11, 2025
            </div>
          </DialogHeader>
          
          <div className="prose prose-lg max-w-none text-foreground">
            {/* Hero Image */}
            <div className="w-full h-80 rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/132715ba-98bd-41c0-a6c7-35d56bd75e3c.png" 
                alt="Freedom of religion is a human right protest sign"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Faith Under Fire No More: Supreme Court Stands with Religious Americans</h2>
            
            <p className="mb-4">
              In a decisive 7-2 ruling that shocked liberal activists, the Supreme Court delivered its strongest defense of religious liberty in decades. The Court ruled that faith-based organizations cannot be forced to hire employees whose lifestyles contradict their religious teachings.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "This is nothing short of a constitutional restoration," declared Alliance Defending Freedom CEO Michael Farris. "The Court has affirmed what the Founders always intended – that government cannot dictate matters of faith and conscience."
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Case That Changed Everything</h2>
            
            {/* Church Interior Image */}
            <div className="w-full h-80 rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/da1b8660-4fed-4517-a9a4-4c0360ce0224.png" 
                alt="Church interior with congregation"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Background: David v. St. Michael's Christian Academy</h3>
            
            <p className="mb-4">
              When St. Michael's Christian Academy in Ohio declined to renew the contract of a teacher who began publicly promoting views contradicting the school's statement of faith, they faced a discrimination lawsuit backed by the ACLU and Biden's Justice Department.
            </p>
            
            <p className="mb-4">
              The lower courts sided with the teacher, ruling that religious exemptions were "too broad" and "harmful to equality." The school faced potential closure and millions in fines.
            </p>
            
            <p className="mb-6"><strong>Then came July 11, 2025.</strong></p>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Ruling That Restored Constitutional Order</h2>
            
            <p className="mb-4">Justice Amy Coney Barrett's majority opinion didn't mince words:</p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "The First Amendment's guarantee of religious freedom is not a second-class right. When the government forces religious institutions to employ those who actively undermine their core beliefs, it strikes at the very heart of religious liberty."
            </blockquote>
            
            <div className="bg-accent/10 border border-accent p-6 mb-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The 7-2 Breakdown:</h3>
              <p className="mb-2"><strong>Majority:</strong> Roberts, Thomas, Alito, Gorsuch, Kavanaugh, Barrett, Jackson</p>
              <p className="mb-4"><strong>Dissent:</strong> Sotomayor, Kagan</p>
              <p>Yes, you read that right – even liberal Justice Ketanji Brown Jackson sided with religious freedom.</p>
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">What This Means for People of Faith</h2>
            
            <p className="mb-4">The decision's impact extends far beyond one school:</p>
            
            <h3 className="text-xl font-semibold mb-3">Protected Religious Rights:</h3>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">Hiring Decisions</strong> – Faith-based employers can require employees to uphold organizational beliefs</li>
              <li><strong className="text-primary">Student Admissions</strong> – Religious schools maintain standards aligned with their mission</li>
              <li><strong className="text-primary">Healthcare Conscience</strong> – Religious hospitals can't be forced to perform procedures violating their faith</li>
              <li><strong className="text-primary">Adoption Agencies</strong> – Faith-based agencies can place children according to religious convictions</li>
            </ol>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Left's Meltdown Reveals Their True Agenda</h2>
            
            <p className="mb-4">The reaction from progressive leaders exposed their hostility to faith:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">AOC:</strong> "This extremist Court just legalized discrimination"</li>
              <li><strong className="text-primary">Elizabeth Warren:</strong> "Religious freedom is being weaponized against equality"</li>
              <li><strong className="text-primary">Gavin Newsom:</strong> "California will resist this assault on civil rights"</li>
            </ul>
            
            <p className="mb-6"><strong>Translation:</strong> They're furious that Christians can actually live according to their beliefs.</p>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">A Victory Years in the Making</h2>
            
            <p className="mb-4">This ruling represents the culmination of a decades-long fight:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">2012:</strong> Obamacare contraception mandate challenged</li>
              <li><strong className="text-primary">2014:</strong> Hobby Lobby wins at Supreme Court</li>
              <li><strong className="text-primary">2018:</strong> Masterpiece Cakeshop victory</li>
              <li><strong className="text-primary">2021:</strong> Fulton v. Philadelphia protects adoption agencies</li>
              <li><strong className="text-primary">2023:</strong> 303 Creative affirms conscience rights</li>
              <li><strong className="text-primary">2025:</strong> David v. St. Michael's – the ultimate vindication</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Real Americans, Real Impact</h2>
            
            <h3 className="text-xl font-semibold mb-3">Sister Mary Catherine, Principal of St. Joseph's School:</h3>
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "For years, we've faced pressure to compromise our beliefs or close our doors. Today, the Supreme Court said we can be both Catholic and American. Our prayers have been answered."
            </blockquote>
            
            <h3 className="text-xl font-semibold mb-3">Rabbi David Goldstein, Yeshiva Director:</h3>
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "This protects not just Christians, but all faiths. Jewish schools can remain Jewish, Muslim schools can remain Muslim. Pluralism wins when religious freedom wins."
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Constitutional Foundation</h2>
            
            <p className="mb-4">Justice Gorsuch's concurring opinion provided a history lesson the left desperately needs:</p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "The Founders fled religious persecution. They embedded protections for faith in our Constitution's very first amendment. To suggest they intended government bureaucrats to dictate religious hiring is to ignore history, text, and common sense."
            </blockquote>
            
            <h3 className="text-xl font-semibold mb-3">Key Constitutional Principles Affirmed:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">Free Exercise Clause</strong> protects religious practice, not just belief</li>
              <li><strong className="text-primary">Establishment Clause</strong> prevents government interference in religious matters</li>
              <li><strong className="text-primary">Freedom of Association</strong> includes right to maintain religious character</li>
              <li><strong className="text-primary">Institutional Autonomy</strong> shields internal religious decisions from state control</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">A Message to the Faithful</h2>
            
            <p className="mb-4">For too long, Americans of faith have been told to hide their beliefs, compromise their convictions, and bow to secular demands. Today, the highest court in the land said: <strong>No more.</strong></p>
            
            <p className="mb-6">
              You can run your schools according to Scripture.<br/>
              You can hire those who share your mission.<br/>
              You can practice what you preach.<br/>
              You can be fully American and fully faithful.
            </p>
            
            <p className="mb-4">Justice Barrett concluded the majority opinion with words that should be framed in every religious institution:</p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "In America, the government serves the people, not the other way around. And among the people's most cherished rights is the freedom to live, work, and worship according to their deepest convictions. Today, we reaffirm that fundamental truth."
            </blockquote>
            
            <p className="mb-4"><strong>The Constitution won. Faith won. Freedom won.</strong></p>
            <p className="mb-6">And that's exactly what the Founders intended.</p>
            
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center mt-8">
              <p className="text-lg font-semibold">
                Religious freedom isn't just for some Americans – it's for all Americans. Share this victory with your faith community and help protect what the Court has preserved.
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