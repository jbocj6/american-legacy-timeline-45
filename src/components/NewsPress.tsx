import { Calendar, ExternalLink, Newspaper } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const NewsPress = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [isFourthModalOpen, setIsFourthModalOpen] = useState(false);
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
      title: "Trump Signs Historic $170B \"Big Beautiful Bill\" on Independence Day",
      date: "July 4, 2025",
      excerpt: "President delivers on campaign promises with massive immigration enforcement and tax cut legislation.",
      category: "AMERICA FIRST",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="news" className="bg-background py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="text-sm font-space uppercase tracking-widest text-destructive font-bold">NEWS</span>
          </div>
          <h2 className="text-6xl font-space font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Latest News & Updates</h2>
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
                ) : index === 2 ? (
                  <img 
                    src="/lovable-uploads/6635dac5-99bd-4c7c-80cd-33726487d6ba.png" 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : index === 3 ? (
                  <img 
                    src="/lovable-uploads/a75bcb41-c53a-4236-bc27-d2c724ca5130.png" 
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
                  onClick={index === 0 ? () => setIsModalOpen(true) : index === 1 ? () => setIsSecondModalOpen(true) : index === 2 ? () => setIsThirdModalOpen(true) : index === 3 ? () => setIsFourthModalOpen(true) : undefined}
                  className="flex items-center text-accent font-inter font-medium hover:text-accent/80 transition-colors"
                >
                  Read Full Article
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-space font-bold text-foreground mb-2 text-center pt-4">
              America First Foreign Policy: Trump Ends Billions in Wasteful Aid to Focus on Americans
            </DialogTitle>
            <div className="text-center text-muted-foreground font-inter mb-4">
              By Jeffrey Brown • July 25, 2025
            </div>
          </DialogHeader>
          
          <div className="prose prose-lg max-w-none text-foreground">

            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Death of USAID: Taxpayers Finally Win</h2>
            
            {/* Hero Image */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/673897af-4d8b-48de-91b8-454e1070cb71.png" 
                alt="Sorry we're CLOSED sign" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="mb-4">
              In a historic victory for American taxpayers, the Trump administration officially shuttered the United States Agency for International Development (USAID) this month, ending decades of unchecked foreign handouts that cost hardworking Americans over $40 billion annually.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "President Trump stated clearly that the United States is no longer going to blindly dole out money with no return for the American people. Reviewing and realigning foreign assistance on behalf of hardworking taxpayers is not just the right thing to do, it is a moral imperative." - State Department Spokesperson Tammy Bruce
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Shocking Truth About Your Tax Dollars</h2>
            
            {/* Foreign Aid Breakdown Infographic */}
            <div className="w-full mb-6 relative overflow-hidden rounded-xl" style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #ef4444 100%)',
              color: 'white',
              padding: '20px',
              position: 'relative'
            }}>
              {/* Flag accent */}
              <div className="absolute top-3 right-3 w-15 h-10 rounded opacity-30" style={{
                background: 'linear-gradient(to bottom, #ef4444 33%, white 33%, white 66%, #ef4444 66%)'
              }}>
                <div className="absolute top-0 left-0 w-6 h-full bg-blue-900"></div>
              </div>
              
              {/* Header */}
              <div className="text-center mb-5 relative z-10">
                <h1 className="text-4xl font-bold mb-1" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>$72 BILLION</h1>
                <p className="text-lg opacity-90 mb-3">U.S. Foreign Aid Spending</p>
                <div className="inline-block px-4 py-1 rounded-full font-bold border-2 text-sm" style={{
                  background: 'rgba(255,255,255,0.2)',
                  borderColor: 'rgba(255,255,255,0.3)'
                }}>FISCAL YEAR 2023</div>
              </div>

              {/* Content Grid */}
              <div className="flex lg:flex-row flex-col gap-4 mt-5 relative z-10">
                {/* Global Stats */}
                <div className="lg:w-1/3 p-4 rounded-xl border text-center self-start" style={{
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(255,255,255,0.2)'
                }}>
                  <div className="text-sm leading-relaxed">
                    The United States was the <span className="text-yellow-400 font-bold text-base">largest single donor</span> of aid globally
                    <br/><br/>
                    Provided <span className="text-yellow-400 font-bold text-base">42%</span> of all humanitarian aid tracked by the UN in 2024
                  </div>
                </div>

                {/* Breakdown Section */}
                <div className="lg:w-2/3 p-4 rounded-xl border" style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(255,255,255,0.2)'
                }}>
                  <h2 className="text-2xl mb-4 text-center text-yellow-400" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
                    Where Your Money Really Went:
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { amount: '$8 Billion', description: 'to Afghanistan since 2021 Taliban takeover' },
                      { amount: '45%', description: 'of Sudan\'s humanitarian aid while Americans suffered' },
                      { amount: '$100 Million', description: 'in "condoms to Gaza" (Trump\'s January revelation)' },
                      { amount: 'Billions', description: 'to corrupt regimes voting against us at the UN' },
                      { amount: 'Gender Studies', description: 'programs in Pakistan and Afghanistan' },
                      { amount: 'Climate Change', description: 'initiatives benefiting China' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="p-3 rounded-lg border-l-4 border-red-500 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                        style={{background: 'rgba(255,255,255,0.1)'}}
                      >
                        <div className="text-xl font-bold text-yellow-400 mb-1">{item.amount}</div>
                        <div className="text-sm opacity-95">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
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
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Secretary Rubio's America First Revolution</h2>
            
            {/* Rubio Image */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/f623fc9c-32ba-4e10-b5c8-9d8f46f9d648.png" 
                alt="Secretary of State Marco Rubio at podium announcing foreign aid reforms" 
                className="w-full h-full object-cover"
              />
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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto px-4 sm:px-6 overflow-x-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl font-space font-bold text-foreground mb-2 text-center leading-tight break-words px-2 pt-4">
              Border Crisis SOLVED: Six Months of Trump Enforcement Delivers Historic Results
            </DialogTitle>
            <div className="text-center text-muted-foreground font-inter mb-4">
              By Jeffrey Brown • July 18, 2025
            </div>
          </DialogHeader>
          
          <div className="prose prose-lg max-w-none text-foreground overflow-x-hidden">{/* Added overflow-x-hidden */}
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 break-words text-center">From Biden's Chaos to Trump's Control in Just Six Months</h2>
            
            {/* Hero Images - Responsive Layout */}
            <div className="w-full mb-6">
              {/* Mobile: Stack vertically */}
              <div className="sm:hidden space-y-3">
                <div className="h-48 bg-muted rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/822dda10-5afc-4653-af72-7ddeb4df6c96.png" 
                    alt="People by river border area" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 bg-muted rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/cf66cf87-7033-496f-b442-053dc512ccbc.png" 
                    alt="Border wall with surveillance" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Desktop: Side by side */}
              <div className="hidden sm:flex h-80 bg-muted rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/822dda10-5afc-4653-af72-7ddeb4df6c96.png" 
                  alt="People by river border area" 
                  className="w-1/2 h-full object-cover"
                />
                <img 
                  src="/lovable-uploads/cf66cf87-7033-496f-b442-053dc512ccbc.png" 
                  alt="Border wall with surveillance" 
                  className="w-1/2 h-full object-cover"
                />
              </div>
            </div>
            
            <p className="mb-4 break-words">
              The transformation at America's southern border is nothing short of miraculous. Just six months after President Trump returned to the White House, the Department of Homeland Security reports the lowest border crossing numbers in decades – a stunning reversal from the Biden-era invasion that threatened American sovereignty.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6 break-words overflow-wrap-anywhere">
              "This $165 billion in funding will help the Department of Homeland Security and our brave law enforcement further deliver on President Trump's mandate to arrest and deport criminal illegal aliens and MAKE AMERICA SAFE AGAIN!" - DHS Secretary Kristi Noem
            </blockquote>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 break-words text-center">The Numbers That Prove Trump's Success</h2>

            {/* Hide complex chart on mobile to prevent overflow */}
            <div className="hidden sm:block">{/* Desktop only */}
            <div className="w-full bg-gradient-to-br from-blue-900 via-blue-700 via-blue-500 to-red-400 p-4 sm:p-10 rounded-2xl text-white font-sans relative overflow-hidden mb-6">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='stars' patternUnits='userSpaceOnUse' width='15' height='15'><circle cx='7.5' cy='7.5' r='0.8' fill='white' opacity='0.1'/></pattern></defs><rect width='100' height='100' fill='url(%23stars)'/></svg>")`
              }} />
              
              <div className="relative z-10">
                <div className="text-center mb-6 sm:mb-10">
                  <h1 className="text-2xl sm:text-5xl font-bold mb-2 sm:mb-3 drop-shadow-lg break-words">BORDER CROSSINGS COMPARISON</h1>
                  <p className="text-sm sm:text-xl opacity-90 mb-2 sm:mb-4 break-words">Monthly Border Encounters: Biden Peak vs Trump Results</p>
                  <div className="bg-white/20 backdrop-blur-md px-2 sm:px-4 py-1 sm:py-2 rounded-full inline-block border border-white/30 text-xs sm:text-base">
                    Source: DHS Data
                  </div>
                </div>

                {/* Mobile: Stacked layout */}
                <div className="sm:hidden space-y-6 my-6">
                  <div className="flex flex-col items-center">
                    <div className="text-center mb-3">
                      <div className="text-lg font-bold text-yellow-300 drop-shadow animate-pulse">251,487</div>
                      <div className="w-24 h-32 bg-gradient-to-t from-red-500 to-red-600 rounded-t-lg shadow-xl mx-auto mt-2"></div>
                    </div>
                    <div className="text-lg font-bold text-center">Biden Peak</div>
                    <div className="text-sm opacity-80">December 2023</div>
                  </div>
                  
                  <div className="text-center text-3xl text-yellow-300 drop-shadow-lg">↓</div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-center mb-3">
                      <div className="text-lg font-bold text-yellow-300 drop-shadow">6,000</div>
                      <div className="w-24 h-2 bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg shadow-xl mx-auto mt-2"></div>
                    </div>
                    <div className="text-lg font-bold text-center">Trump Result</div>
                    <div className="text-sm opacity-80">July 2025</div>
                  </div>
                </div>

                {/* Desktop: Side by side layout */}
                <div className="hidden sm:flex justify-center items-end gap-16 my-10 h-80">
                  <div className="flex flex-col items-center relative">
                    <div className="w-32 h-64 bg-gradient-to-t from-red-500 to-red-600 rounded-t-lg relative shadow-xl hover:scale-105 transition-transform">
                      <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 text-xl font-bold text-yellow-300 drop-shadow animate-pulse">
                        251,487
                      </div>
                    </div>
                    <div className="mt-4 text-xl font-bold text-center">Biden Peak</div>
                    <div className="text-sm opacity-80 mt-1">December 2023</div>
                  </div>
                  
                  <div className="absolute text-5xl text-yellow-300 drop-shadow-lg">→</div>
                  
                  <div className="flex flex-col items-center relative">
                    <div className="w-32 h-4 bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg relative shadow-xl hover:scale-105 transition-transform">
                      <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 text-xl font-bold text-yellow-300 drop-shadow">
                        6,000
                      </div>
                    </div>
                    <div className="mt-4 text-xl font-bold text-center">Trump Results</div>
                    <div className="text-sm opacity-80 mt-1">June 2025</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:gap-10 mt-8 sm:mt-12">
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-center text-red-300">
                      Biden's Border Disaster
                      <span className="bg-red-500/30 text-red-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ml-2 sm:ml-3">CRISIS</span>
                    </h2>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10 text-sm sm:text-base">
                        <span>Monthly crossings at peak</span>
                        <span className="text-lg sm:text-xl font-bold text-yellow-300">251,487</span>
                      </div>
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10 text-sm sm:text-base">
                        <span>Released into American communities</span>
                        <span className="text-lg sm:text-xl font-bold text-yellow-300">85%</span>
                      </div>
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10 text-sm sm:text-base">
                        <span>Cost to taxpayers annually</span>
                        <span className="text-lg sm:text-xl font-bold text-yellow-300">$72 billion</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span>Miles of new wall built</span>
                        <span className="text-xl font-bold text-yellow-300">ZERO</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-center text-green-300">
                      Trump's Border Victory
                      <br />
                      <span className="bg-green-500/30 text-green-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">6 MONTHS</span>
                    </h2>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10 text-sm sm:text-base">
                        <span>Monthly crossings in June 2025</span>
                        <span className="text-lg sm:text-xl font-bold text-yellow-300">6,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10 text-sm sm:text-base">
                        <span>Illegal aliens arrested in 2025</span>
                        <span className="text-lg sm:text-xl font-bold text-yellow-300">300,000+</span>
                      </div>
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10 text-sm sm:text-base">
                        <span>Drop in Darien Gap migration</span>
                        <span className="text-lg sm:text-xl font-bold text-yellow-300">99%</span>
                      </div>
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10 text-sm sm:text-base">
                        <span>New wall under construction</span>
                        <span className="text-lg sm:text-xl font-bold text-yellow-300">85+ miles</span>
                      </div>
                      <div className="flex justify-between items-center py-2 sm:py-3 text-sm sm:text-base">
                        <span>Parole releases (May & June)</span>
                        <span className="text-lg sm:text-xl font-bold text-yellow-300 animate-pulse">ZERO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>{/* End desktop only chart */}

            {/* Mobile-friendly simple stats - Show on mobile only */}
            <div className="sm:hidden bg-accent/10 border border-accent p-4 mb-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-center">Border Crossings Comparison</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-red-100 p-3 rounded">
                  <div className="text-2xl font-bold text-red-600">251,487</div>
                  <div className="text-sm text-red-700">Biden Peak</div>
                  <div className="text-xs text-gray-600">Dec 2023</div>
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <div className="text-2xl font-bold text-green-600">6,000</div>
                  <div className="text-sm text-green-700">Trump Result</div>
                  <div className="text-xs text-gray-600">July 2025</div>
                </div>
              </div>
              <div className="text-center mt-3 text-sm text-gray-600">98% Reduction in Border Crossings</div>
            </div>

            <div className="bg-accent/10 border border-accent p-4 sm:p-6 mb-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Biden's Border Disaster:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong className="text-primary">251,487</strong> - Monthly crossings at peak (December 2023)</li>
                <li><strong className="text-primary">85%</strong> - Released into American communities</li>
                <li><strong className="text-primary">$72 billion</strong> - Cost to taxpayers annually</li>
                <li><strong className="text-primary">Zero</strong> - Miles of new wall built</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold mb-4">Trump's Border Victory (Six Months):</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-primary">6,000</strong> - Monthly crossings in June 2025</li>
                <li><strong className="text-primary">300,000+</strong> - Illegal aliens arrested in 2025</li>
                <li><strong className="text-primary">99%</strong> - Drop in Darien Gap migration</li>
                <li><strong className="text-primary">85+ miles</strong> - New wall under construction</li>
                <li><strong className="text-primary">ZERO</strong> - Parole releases in May and June</li>
              </ul>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 break-words text-center">Ending Catch-and-Release: Promise Kept</h2>
            
            {/* ICE Operations Image */}
            <div className="w-full h-48 sm:h-64 bg-muted rounded-lg overflow-hidden mb-6 max-w-full">{/* Added max-w-full */}
              <img 
                src="/lovable-uploads/b917ca10-5b5f-42d5-899a-d65d5827782c.png" 
                alt="ICE deportation operations - detained individuals being transported" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="mb-4">
              In both May and June, U.S. Border Patrol reported zero parole releases—reinforcing the Administration's commitment to ending catch-and-release policies. This represents a complete reversal from Biden's open-border approach.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "The Trump Administration empowered our brave men and women in law enforcement to use common sense to do their jobs effectively," Secretary Noem stated.
            </blockquote>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 text-center">Criminal Aliens Face Justice at Last</h2>
            
            {/* Criminal Statistics Infographic */}
            <div className="w-full bg-gradient-to-br from-slate-900 via-slate-700 via-blue-900 to-red-600 p-4 sm:p-10 rounded-2xl text-white font-sans relative overflow-hidden mb-6">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='badge' patternUnits='userSpaceOnUse' width='25' height='25'><polygon points='12.5,2 15.5,8.5 22.5,8.5 17,13 19,20 12.5,16 6,20 8,13 2.5,8.5 9.5,8.5' fill='white' opacity='0.05'/></pattern></defs><rect width='100' height='100' fill='url(%23badge)'/></svg>")`
              }} />
              
              <div className="relative z-10">
                <div className="text-center mb-6 sm:mb-10">
                  <h1 className="text-2xl sm:text-5xl font-bold mb-2 sm:mb-4 text-yellow-300 drop-shadow-lg">ICE ENFORCEMENT RESULTS</h1>
                  <p className="text-lg sm:text-2xl opacity-95 mb-2 sm:mb-3">Criminal Alien Arrests in 2025</p>
                  <div className="bg-red-500/30 border-2 border-red-500/50 px-3 sm:px-5 py-2 sm:py-3 rounded-full inline-block animate-pulse italic text-sm sm:text-base">
                    The crucial detail mainstream media won't report
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 my-6 sm:my-10">
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-8 rounded-2xl border-2 border-green-500/30 flex flex-col items-center justify-center">
                    <div className="text-3xl sm:text-6xl font-bold text-green-500 drop-shadow-lg mb-2 sm:mb-3 animate-pulse">300,000+</div>
                    <div className="text-sm sm:text-xl opacity-90 text-center">Illegal Aliens Arrested<br />in 2025 Alone</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-8 rounded-2xl border-2 border-red-500/30 relative overflow-hidden">
                    <div className="w-32 h-32 sm:w-52 sm:h-52 mx-auto mb-3 sm:mb-5 rounded-full relative shadow-2xl" style={{
                      background: `conic-gradient(#ef4444 0deg 252deg, #374151 252deg 360deg)`
                    }}>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center border-3 border-white/20">
                        <div className="text-2xl sm:text-4xl font-bold text-yellow-300">70%</div>
                        <div className="text-xs sm:text-sm opacity-80 text-center">Are<br />Criminals</div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-2 sm:gap-5">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded"></div>
                        <span className="text-xs sm:text-sm">Criminal Aliens (70%)</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-600 rounded"></div>
                        <span className="text-xs sm:text-sm">Non-Criminal (30%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12">
                  <h2 className="text-2xl sm:text-4xl text-center mb-4 sm:mb-8 text-yellow-300 drop-shadow-lg font-bold">Criminals Being Removed Include:</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                    <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border-l-4 border-red-500 relative group hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 hover:bg-white/15">
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-lg sm:text-2xl">⚔️</div>
                      <div className="absolute -top-2 sm:-top-3 right-3 sm:right-5 bg-red-500/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold uppercase">VIOLENT</div>
                      <div className="text-lg sm:text-xl font-bold text-red-300 mb-2 sm:mb-3">Gang Members</div>
                      <div className="text-sm sm:text-lg leading-relaxed opacity-90">
                        MS-13 and other violent criminal organizations terrorizing American communities
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border-l-4 border-red-500 relative group hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 hover:bg-white/15">
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-lg sm:text-2xl">💊</div>
                      <div className="absolute -top-2 sm:-top-3 right-3 sm:right-5 bg-red-500/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold uppercase">DEADLY</div>
                      <div className="text-lg sm:text-xl font-bold text-red-300 mb-2 sm:mb-3">Drug Traffickers</div>
                      <div className="text-sm sm:text-lg leading-relaxed opacity-90">
                        Criminals poisoning American communities with fentanyl and other deadly substances
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border-l-4 border-red-500 relative group hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 hover:bg-white/15">
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-lg sm:text-2xl">⛓️</div>
                      <div className="absolute -top-2 sm:-top-3 right-3 sm:right-5 bg-red-500/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold uppercase">PREDATOR</div>
                      <div className="text-lg sm:text-xl font-bold text-red-300 mb-2 sm:mb-3">Human Traffickers</div>
                      <div className="text-sm sm:text-lg leading-relaxed opacity-90">
                        Exploiting vulnerable people and profiting from human misery
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border-l-4 border-red-500 relative group hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 hover:bg-white/15">
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-lg sm:text-2xl">🚨</div>
                      <div className="absolute -top-2 sm:-top-3 right-3 sm:right-5 bg-red-500/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold uppercase">PROTECTED</div>
                      <div className="text-lg sm:text-xl font-bold text-red-300 mb-2 sm:mb-3">Violent Felons</div>
                      <div className="text-sm sm:text-lg leading-relaxed opacity-90">
                        Previously protected by <span className="text-yellow-300 font-bold">sanctuary cities</span> that shielded criminals from justice
                      </div>
                    </div>
                  </div>
                </div>
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

            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Darien Gap Miracle: 99% Drop</h2>
            
            {/* Darien Gap Infographic */}
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-6">
              <div 
                className="relative p-6 text-white font-sans overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #1e3a8a 50%, #dc2626 100%)'
                }}
              >
                {/* Background pattern */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"stars\" patternUnits=\"userSpaceOnUse\" width=\"20\" height=\"20\"><circle cx=\"10\" cy=\"10\" r=\"1\" fill=\"white\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23stars)\"/></svg>')"
                  }}
                />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold mb-2 text-yellow-400" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>
                      DARIEN GAP MIGRATION
                    </h1>
                    <p className="text-lg mb-2 opacity-95">
                      The World's Most Dangerous Migration Route
                    </p>
                    <div className="inline-block bg-green-500/30 border-2 border-green-500/60 px-4 py-2 rounded-full text-sm font-bold uppercase">
                      Stunning Achievement
                    </div>
                  </div>

                  {/* Comparison Section */}
                  <div className="grid lg:grid-cols-3 gap-6 items-center">
                    {/* Before Card */}
                    <div className="bg-white/10 backdrop-blur-md border-2 border-red-500/50 rounded-xl p-5 text-center hover:transform hover:-translate-y-1 transition-all duration-300">
                      <div className="text-lg font-bold mb-3 text-red-300">
                        BEFORE TRUMP
                      </div>
                      <div className="text-3xl font-bold mb-2 text-red-400" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
                        TENS OF<br/>THOUSANDS
                      </div>
                      <div className="text-sm opacity-90 leading-relaxed">
                        Monthly crossings through Panama's treacherous Darien Gap jungle
                      </div>
                    </div>

                    {/* Arrow with Drop Percentage */}
                    <div className="relative text-center">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-red-500/95 text-white px-8 py-2 rounded-full text-2xl font-bold border-2 border-white/30 whitespace-nowrap" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                        99% DROP
                      </div>
                      <div className="text-9xl text-yellow-400 animate-pulse" style={{textShadow: '4px 4px 8px rgba(0,0,0,0.5)', fontSize: '12rem'}}>
                        →
                      </div>
                    </div>

                    {/* After Card */}
                    <div className="bg-white/10 backdrop-blur-md border-2 border-green-500/50 rounded-xl p-5 text-center hover:transform hover:-translate-y-1 transition-all duration-300">
                      <div className="text-lg font-bold mb-3 text-green-300">
                        AFTER TRUMP
                      </div>
                      <div className="text-3xl font-bold mb-2 text-green-400" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
                        MERE<br/>TRICKLE
                      </div>
                      <div className="text-sm opacity-90 leading-relaxed">
                        Migrants turning back before they even reach our border
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mb-4">
              Perhaps the most stunning achievement: Migrants are turning BACK before they even reach our border. Migration through Panama's Darien Gap is down 99% - from tens of thousands monthly to a mere trickle.
            </p>
            
            <p className="mb-6">Why? Because the world knows: <strong>The free ride is over. America is closed to illegal entry.</strong></p>

            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Wall Gets Built - Finally</h2>
            
            {/* Wall Construction Image */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/a2259c5e-95cd-4931-868c-10d7021f6880.png" 
                alt="US Border Patrol officer speaking at podium with border wall in background" 
                className="w-full h-full object-cover object-top"
              />
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

            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">What This Means for American Communities</h2>
            
            {/* Safe Community Image */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/ea694af3-b20f-42df-9ff3-ed044e032f8c.png" 
                alt="People celebrating with American flags" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <p className="mb-4">The dramatic enforcement success translates to real benefits for Americans:</p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">Safer neighborhoods</strong> as criminal aliens are removed</li>
              <li><strong className="text-primary">Less strain</strong> on schools and hospitals</li>
              <li><strong className="text-primary">Lower crime rates</strong> in previously overwhelmed border towns</li>
              <li><strong className="text-primary">American jobs</strong> protected from illegal competition</li>
              <li><strong className="text-primary">Reduced drug flow</strong> saving American lives</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Bottom Line: Sovereignty Restored</h2>
            
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
            <DialogTitle className="text-3xl font-space font-bold text-foreground mb-2 text-center pt-4">
              Supreme Court Delivers: Maryland Parents Win Huge Religious Liberty Victory
            </DialogTitle>
            <div className="text-center text-muted-foreground font-inter mb-4">
              By Jeffrey Brown • July 11, 2025
            </div>
          </DialogHeader>
          
          <div className="prose prose-lg max-w-none text-foreground">

            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Parents' Rights Triumph Over Woke School Agenda</h2>
            
            {/* Hero Image */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/659789db-6b54-4168-afa0-5306412198f1.png" 
                alt="Freedom of Religion is a Human Right protest sign" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="mb-4">
              In a monumental victory for religious freedom and parental rights, the Supreme Court ruled decisively in favor of an interfaith group of Maryland parents in <em>Mahmoud v. Taylor</em>, affirming their right to opt their children out of classroom instruction containing LGBTQ+ themes that conflict with their religious beliefs.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "The U.S. Supreme Court's decision is a monumental victory for parents and their fundamental right to make decisions consistent with their religious beliefs about the upbringing and education of their children," declared Alliance Defending Freedom Senior Counsel John Bursch.
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Case That United Faiths Against Indoctrination</h2>
            
            {/* Court Exhibit Header */}
            <div className="w-full max-w-4xl mx-auto mb-6">
              <div className="bg-gray-50 border-2 border-slate-700 rounded-t-lg p-6 text-center font-serif">
                <div className="text-2xl font-bold text-slate-700 mb-2 tracking-wide">
                  MAHMOUD ET AL. v. TAYLOR ET AL.
                </div>
                <div className="text-sm text-slate-600 mb-1 font-medium">
                  SUPREME COURT OF THE UNITED STATES
                </div>
                <div className="text-sm text-slate-600 mb-4 font-medium">
                  Decided June 27, 2025
                </div>
                <div className="inline-block bg-white border-2 border-red-600 text-red-600 px-5 py-2 rounded font-bold text-lg uppercase tracking-wider">
                  Court Exhibit A
                </div>
                <div className="text-xs text-gray-500 mt-2 italic">
                  No. 24–297
                </div>
              </div>
            </div>

            {/* Three Images Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/8c5b90c9-0f28-4aa6-a117-0b87fe03142f.png" 
                  alt="Uncle Bobby's Wedding book cover" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/bd7775e4-7477-4b12-b0e9-05ef09fb4769.png" 
                  alt="Child expressing joy and warm feelings" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/68d4ab21-23cf-4443-844b-a98a124677b0.png" 
                  alt="Mother and child discussing identity" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            
            <p className="mb-4">
              The case emerged when Maryland's Montgomery County Public Schools refused to allow parents to opt their children out of lessons featuring books with LGBTQ+ content, including titles like "Uncle Bobby's Wedding."
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
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Justice Alito's Powerful Defense of Parental Rights</h2>
            
            {/* Justice Alito Image */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/b8ab8c64-7019-4fcb-9f76-e1d547f4a152.png" 
                alt="Justice Samuel Alito in his Supreme Court robes" 
                className="w-full h-full object-cover object-[50%_10%]"
              />
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
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Coalition That Shocked the Left</h2>
            
            
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
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Why This Victory Matters for Every American Parent</h2>
            
            {/* Parental Rights Infographic */}
            <div className="w-full max-w-6xl mx-auto min-h-[400px] sm:min-h-[500px] lg:h-[550px] bg-gradient-to-br from-blue-800 via-blue-500 via-red-500 to-red-600 rounded-3xl relative overflow-hidden shadow-2xl flex flex-col mb-6">
              {/* Background Stars Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-repeat" style={{backgroundImage: "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
              </div>
              
              
              {/* Header */}
              <div className="text-center p-4 sm:p-6 lg:p-8 pb-3 sm:pb-4 lg:pb-5 relative z-10">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 text-white drop-shadow-lg leading-tight">
                  PARENTAL RIGHTS PROTECTED
                </h1>
                <p className="text-sm sm:text-lg lg:text-xl text-white/90">
                  Constitutional Freedoms Reaffirmed by the Supreme Court
                </p>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-16 flex-1 relative z-10">
                <div className="bg-white/15 backdrop-blur-sm py-3 sm:py-4 px-3 sm:px-4 rounded-2xl border-2 border-white/20 text-center flex flex-col justify-center hover:transform hover:-translate-y-3 transition-all duration-300 hover:shadow-xl min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
                  <div className="text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 drop-shadow-md text-yellow-300">✝️</div>
                  <div className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 drop-shadow-md">Religious Upbringing</div>
                  <div className="text-sm sm:text-base text-white/90 leading-snug">
                    Parents have the fundamental right to direct their children's religious development without government interference
                  </div>
                </div>

                <div className="bg-white/15 backdrop-blur-sm py-3 sm:py-4 px-3 sm:px-4 rounded-2xl border-2 border-white/20 text-center flex flex-col justify-center hover:transform hover:-translate-y-3 transition-all duration-300 hover:shadow-xl min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
                  <div className="text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 drop-shadow-md text-green-400">👨‍👩‍👧‍👦</div>
                  <div className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 drop-shadow-md">Moral Education</div>
                  <div className="text-sm sm:text-base text-white/90 leading-snug">
                    Families, not bureaucrats, are the primary educators responsible for instilling values and moral principles
                  </div>
                </div>

                <div className="bg-white/15 backdrop-blur-sm py-3 sm:py-4 px-3 sm:px-4 rounded-2xl border-2 border-white/20 text-center flex flex-col justify-center hover:transform hover:-translate-y-3 transition-all duration-300 hover:shadow-xl min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
                  <div className="text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 drop-shadow-md text-red-400">📚</div>
                  <div className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 drop-shadow-md">Curriculum Oversight</div>
                  <div className="text-sm sm:text-base text-white/90 leading-snug">
                    Parents must be notified and given opt-out rights when content conflicts with their religious beliefs
                  </div>
                </div>
              </div>

              {/* Victory Banner */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500/90 text-white px-3 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg lg:text-xl font-bold drop-shadow-md border-2 border-white/30 animate-pulse">
                CONSTITUTIONAL RIGHTS UPHELD
              </div>
            </div>
            
            <p className="mb-4">The Supreme Court's decision reaffirms fundamental principles:</p>

            <h3 className="text-xl font-semibold mb-3">1. Parents Are Primary Educators</h3>
            <p className="mb-4">The Court recognized that parents, not government bureaucrats, have the primary right and responsibility to guide their children's moral and religious education.</p>

            <h3 className="text-xl font-semibold mb-3">2. Religious Freedom Isn't Negotiable</h3>
            <p className="mb-4">Public schools cannot force children to participate in instruction that violates their family's deeply held religious beliefs.</p>

            <h3 className="text-xl font-semibold mb-3">3. The First Amendment Still Matters</h3>
            <p className="mb-6">Despite the left's attempts to erode religious liberty, the Constitution's protections remain strong.</p>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">What This Means for Your Children</h2>
            
            {/* Classroom Image */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/becbcb37-a11e-42ac-94de-113133641d3d.png" 
                alt="Elementary school children studying together with learning materials" 
                className="w-full h-full object-cover"
              />
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
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">What You Can Do Now</h2>
            
            {/* Action Items Interactive Component */}
            <div className="w-full mb-6">
              <div 
                className="w-full max-w-5xl mx-auto rounded-[20px] relative overflow-hidden p-6 sm:p-10 text-white font-sans"
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #1e3a8a 50%, #dc2626 100%)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
                }}
              >
                {/* Star Pattern Background */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="action-stars" patternUnits="userSpaceOnUse" width="25" height="25"><polygon points="12.5,2 15.5,8.5 22.5,8.5 17,13 19,20 12.5,16 6,20 8,13 2.5,8.5 9.5,8.5" fill="white" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23action-stars)"/></svg>')`,
                  }}
                />
                
                {/* Header */}
                <div className="text-center mb-8 relative z-10">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-yellow-400" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.4)'}}>
                    TAKE ACTION NOW
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl opacity-95 mb-3">
                    Use Your Newly Protected Constitutional Rights
                  </p>
                  <div 
                    className="inline-block px-4 py-2 rounded-full font-bold text-sm sm:text-base border-2 animate-pulse"
                    style={{
                      background: 'rgba(34, 197, 94, 0.3)',
                      borderColor: 'rgba(34, 197, 94, 0.6)'
                    }}
                  >
                    SUPREME COURT VICTORY
                  </div>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mt-8 relative z-10">
                  {[
                    { number: 1, icon: '📋', title: 'Review School Curriculum', description: 'Demand transparency in what\'s being taught to your children', color: '#fbbf24' },
                    { number: 2, icon: '📝', title: 'Request Opt-Out Forms', description: 'Schools must now provide them for controversial content', color: '#22c55e' },
                    { number: 3, icon: '🤝', title: 'Organize With Parents', description: 'Build coalitions across faith lines for maximum impact', color: '#8b5cf6' },
                    { number: 4, icon: '⚖️', title: 'Contact Legal Groups', description: 'ADF or Becket can help if schools refuse to comply', color: '#ef4444' },
                    { number: 5, icon: '📢', title: 'Share This Victory', description: 'Spread the word - other parents need to know their rights', color: '#06b6d4' }
                  ].map((step, index) => (
                    <div 
                      key={index}
                      className="relative p-4 lg:p-6 rounded-xl border-2 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        borderColor: 'rgba(255,255,255,0.2)'
                      }}
                    >
                      {/* Step Number */}
                      <div 
                        className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-3 border-white"
                        style={{
                          background: '#ef4444',
                          boxShadow: '0 3px 10px rgba(0,0,0,0.3)'
                        }}
                      >
                        {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div 
                        className="text-3xl lg:text-4xl my-4 lg:my-6"
                        style={{
                          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                          color: step.color
                        }}
                      >
                        {step.icon}
                      </div>
                      
                      {/* Title */}
                      <div className="text-sm lg:text-lg font-bold mb-2 lg:mb-3 leading-tight" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
                        {step.title}
                      </div>
                      
                      {/* Description */}
                      <div className="text-xs lg:text-sm opacity-90 leading-relaxed">
                        {step.description}
                      </div>
                      
                      {/* Arrow (hidden on mobile and last item) */}
                      {index < 4 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-xl text-yellow-400" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div 
                  className="mt-8 p-6 rounded-xl text-center border-2 relative z-10"
                  style={{
                    background: 'rgba(239, 68, 68, 0.2)',
                    borderColor: 'rgba(239, 68, 68, 0.4)'
                  }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 mb-3" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                    The Time Is NOW
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl font-bold leading-relaxed">
                    This Supreme Court victory gives parents unprecedented power.<br className="hidden sm:block" />
                    Don't let this moment pass - ACT TODAY!
                  </div>
                </div>
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
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Bottom Line: Parents Win, Woke Ideology Loses</h2>
            
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

      {/* Fourth Article Modal - Big Beautiful Bill */}
      <Dialog open={isFourthModalOpen} onOpenChange={setIsFourthModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-space font-bold text-foreground mb-2 text-center pt-4">
              America First Wins: Trump Signs Historic $170B Big Beautiful Bill
            </DialogTitle>
            <div className="text-center text-muted-foreground font-inter mb-4">
              By Jeffrey Brown • July 4, 2025
            </div>
          </DialogHeader>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Independence Day Victory: Promises Made, Promises Kept</h2>
            
            {/* Hero Image */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/e92fe117-ce24-4d7b-ba39-520838953dfe.png" 
                alt="President Trump signing the Big Beautiful Bill at White House ceremony on Independence Day" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <p className="mb-4">
              President Donald J. Trump delivered the ultimate Fourth of July gift to American patriots today, signing the historic "One Big Beautiful Bill" into law at a 5 p.m. White House ceremony. The massive $170.7 billion package represents the largest conservative policy victory in decades, fundamentally reshaping America's approach to border security, immigration enforcement, and taxation.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "Promises made, promises kept!" Vice President JD Vance posted on X. "At times I even doubted we'd get it done by July 4! But now we've delivered big tax cuts and the resources necessary to secure the border."
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">What's Really in the Bill Liberal Media Won't Tell You</h2>
            
            {/* Infographic Placeholder */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[INFOGRAPHIC NEEDED]</p>
                <p>Breakdown of $170.7B - showing $46.6B border wall, $45B detention centers, $30B ICE personnel, tax cut provisions</p>
                <p className="text-sm mt-2">Create infographic showing funding breakdown</p>
              </div>
            </div>
            
            <p className="mb-4">
              According to the House's passage of the bill on July 3, meeting Trump's self-imposed deadline of July 4, this legislation delivers on every major conservative priority:
            </p>

            <div className="bg-accent/10 border border-accent p-6 mb-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Border Security That Actually Works:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-primary">$46.6 billion for border wall construction</strong> – more than 3 times what the Trump administration spent in its first term</li>
                <li><strong className="text-primary">$45 billion for detention centers</strong> – funding to expand ICE detention to at least 116,000 beds</li>
                <li><strong className="text-primary">$30 billion for ICE personnel</strong> – hiring 10,000 new ICE agents, transportation, and facilities</li>
                <li><strong className="text-primary">$14.4 billion for removals</strong> – helping ICE achieve as many as 1 million deportations per year</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Democrats' Eight-Hour Meltdown Fails to Stop Victory</h2>
            
            {/* Democrats' Opposition Image */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/c4b1deb4-7945-4707-99a6-4bdf5f4860a0.png" 
                alt="Democratic opposition presenting protest boards against Trump's legislation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="mb-4">
              Minority Leader Hakeem Jeffries spoke for eight hours and 44 minutes, breaking a record for the longest House floor speech, desperately trying to delay the inevitable. Jeffries decried cuts to Medicaid and other provisions in the sweeping legislation and referred to the House floor as a "crime scene."
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "This bill is a deal with the devil. It explodes our national debt. It militarizes our entire economy. And it strips away health care and basic dignity of the American people," ranted New York Democratic Rep. Alexandria Ocasio-Cortez.
            </blockquote>
            
            <p className="mb-6">Reality check: Democrats are panicking because this bill delivers real results for real Americans instead of funding their radical agenda.</p>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Secretary Noem: "Make America Safe Again!"</h2>
            
            {/* DHS Seal Image Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[IMAGE NEEDED]</p>
                <p>DHS Secretary Kristi Noem at podium with DHS seal and American flag</p>
                <p className="text-sm mt-2">Source needed - DHS Photo</p>
              </div>
            </div>
            
            <p className="mb-4">
              "President Trump's signing the One Big Beautiful Bill is a win for law and order and the safety and security of the American people," said Secretary Kristi Noem. "This $165 billion in funding will help the Department of Homeland Security and our brave law enforcement further deliver on President Trump's mandate to arrest and deport criminal illegal aliens and MAKE AMERICA SAFE AGAIN!"
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Provisions Secretary Noem Highlighted:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>$46.5 billion to complete construction of the border wall</li>
              <li>$12 billion in state reimbursements for states that fought against the Biden administration's open border</li>
              <li>$4.1 billion to hire additional CBP personnel, including 3,000 more customs officers and 3,000 new Border Patrol agents</li>
              <li>$10,000 bonus for ICE and Border Patrol agents for the next four years</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Six Months of Winning: The Trump Effect</h2>
            
            {/* Statistics Chart Placeholder */}
            <div className="w-full h-80 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[CHART NEEDED]</p>
                <p>Before/After comparison showing border crossings plummeting under Trump vs Biden era peaks</p>
                <p className="text-sm mt-2">Create chart using DHS statistics</p>
              </div>
            </div>
            
            <p className="mb-4">The results speak for themselves. In both May and June, U.S. Border Patrol reported zero parole releases—reinforcing the Administration's commitment to ending catch-and-release policies.</p>

            <div className="bg-accent/10 border border-accent p-6 mb-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Trump's First Six Months By The Numbers:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Trump administration has arrested more than 300,000 illegal aliens in 2025 alone. 70% of ICE arrests are criminal illegal aliens with criminal charges or convictions</li>
                <li>Migrants are turning BACK before they even reach our border— migration through Panama's Darien Gap is down 99%</li>
                <li>Slightly over 6,000 apprehensions in June, according to preliminary figures – compared to 251,487 monthly under Biden's peak</li>
                <li>Border crossings earlier this year plunged to the lowest level in decades</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Tax Relief for Working Americans</h2>
            
            {/* Tax Relief Graphic Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[GRAPHIC NEEDED]</p>
                <p>Icons showing tax relief for tips, overtime, and Social Security benefits</p>
                <p className="text-sm mt-2">Create tax relief infographic</p>
              </div>
            </div>
            
            <p className="mb-4">While Democrats screamed about the border provisions, they conveniently ignored the massive tax relief for working families:</p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">No taxes on tips</strong> – helping millions of service workers</li>
              <li><strong className="text-primary">No taxes on overtime pay</strong> – rewarding hard work</li>
              <li><strong className="text-primary">Social Security tax relief</strong> – protecting seniors' income</li>
              <li><strong className="text-primary">Extension of Trump tax cuts</strong> – keeping more money in your pocket</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Real Story: Law and Order Returns</h2>
            
            {/* ICE Operations Image Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <p className="text-lg font-semibold mb-2">[IMAGE NEEDED]</p>
                <p>ICE agents conducting enforcement operation</p>
                <p className="text-sm mt-2">Source needed - ICE Photo</p>
              </div>
            </div>
            
            <p className="mb-4">
              President Trump—with $46.5 billion from the Big Beautiful Bill—is finishing the border wall. DHS already has more than 85 miles either planned or under construction with funding from the prior year, in addition to hundreds of miles that are now planned to be funded by the bill.
            </p>

            <h3 className="text-xl font-semibold mb-3">What This Means for America:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>ICE becomes the largest federal law enforcement agency</li>
              <li>Criminal aliens can no longer hide in sanctuary cities</li>
              <li>Drug cartels face unprecedented enforcement pressure</li>
              <li>American communities become safer as criminals are removed</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Bottom Line: America First Delivers</h2>
            
            <p className="mb-4">
              On this Independence Day, President Trump has given America its independence back – from open borders, from criminal aliens, from the radical left's agenda to transform our nation.
            </p>
            
            <p className="mb-4">
              This isn't just a funding bill. It's a declaration that America will no longer be the world's doormat. It's a promise that our tax dollars will secure OUR borders, protect OUR communities, and serve OUR citizens.
            </p>
            
            <p className="mb-4">
              The establishment said it couldn't be done. The media said it was impossible. The Democrats tried everything to stop it.
            </p>
            
            <p className="mb-4">But Donald J. Trump delivered. Again.</p>
            
            <p className="mb-6"><strong>Happy Independence Day, America. Your country is back.</strong></p>

            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center mt-8">
              <p className="text-lg font-semibold">
                This historic victory must be defended. Share this truth with every American who cares about border security and the rule of law. The mainstream media won't tell this story – we must.
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