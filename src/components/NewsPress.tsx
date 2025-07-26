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
      title: "Trump Signs Historic $170B Conservative Victory Package",
      date: "July 25, 2025",
      excerpt: "President Trump transforms July 4th into policy triumph with sweeping tax cuts and border security funding.",
      category: "POLICY WIN",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Border Patrol Reports 91% Drop in Crossings as Trump Policies Take Effect",
      date: "July 18, 2025", 
      excerpt: "New enforcement measures and completed wall sections slash illegal immigration to lowest levels in decades.",
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
              Trump's Big Beautiful Bill: The Conservative Victory America Needed
            </DialogTitle>
            <div className="text-center text-muted-foreground font-inter mb-4">
              By Jeffrey Brown • July 25, 2025
            </div>
          </DialogHeader>
          
          <div className="prose prose-lg max-w-none text-foreground">
            {/* Hero Image */}
            <div className="w-full h-80 rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/44f76c58-3193-4e9c-bfbf-b21cbf3e5b1a.png" 
                alt="President Trump signing legislation"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Independence Day That Changed Everything</h2>
            
            <p className="mb-4">
              On July 4th, 2025, President Donald J. Trump delivered what conservative leaders are calling the most significant policy victory in three decades. The "One Big Beautiful Bill" – a $170.7 billion legislative package – fundamentally reshapes America's tax code, border security, and education system.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "There could be no better birthday present for America than the phenomenal victory we achieved just hours ago," Trump declared to a roaring crowd of over 50,000 patriots gathered at the Iowa State Fairgrounds.
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">What's In The Bill That Has Liberals Panicking</h2>
            
            {/* Bill Breakdown Chart */}
            <div className="w-full h-auto mb-4">
              <img 
                src="/lovable-uploads/e40a95ef-ccd1-4d5b-990c-f26de279e917.png" 
                alt="One Big Beautiful Bill - $170.7B Investment Breakdown"
                className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setIsImageModalOpen(true)}
              />
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
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Second Amendment Victories Hidden in Plain Sight</h2>
            
            {/* Gun Rights Image */}
            <div className="w-full h-40 mb-4">
              <img 
                src="/lovable-uploads/dbfddf67-f12f-4266-9cee-43e78af28ea4.png" 
                alt="Firearm suppressor - tax stamp elimination"
                className="w-full h-full object-cover rounded-lg"
              />
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

      {/* Second Article Modal */}
      <Dialog open={isSecondModalOpen} onOpenChange={setIsSecondModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-space font-bold text-foreground mb-2 text-center">
              Border Secured: How Trump Delivered Where Biden Failed
            </DialogTitle>
            <div className="text-center text-muted-foreground font-inter mb-4">
              By Jeffrey Brown • July 18, 2025
            </div>
          </DialogHeader>
          
          <div className="prose prose-lg max-w-none text-foreground">
            {/* Hero Image */}
            <div className="w-full h-80 rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/014b2093-85d6-4c21-8e17-49f1bf900448.png" 
                alt="Border Patrol vehicle at border wall construction"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Numbers Don't Lie: Biden's Crisis Becomes Trump's Victory</h2>
            
            <p className="mb-4">
              Just six months into President Trump's second term, the transformation at our southern border is nothing short of miraculous. Border Patrol reports a staggering 91% reduction in illegal crossings compared to the peak of Biden's manufactured crisis.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-primary mb-6">
              "We finally have the tools, the mandate, and the leadership to do our jobs," declared Brandon Judd, President of the National Border Patrol Council. "Agents who were ready to quit under Biden are now proud to wear the uniform again."
            </blockquote>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">From Chaos to Control: The Trump Doctrine Works</h2>
            
            <div className="bg-accent/10 border border-accent p-6 mb-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Biden Disaster By The Numbers:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong className="text-primary">251,487</strong> – Monthly illegal crossings at the peak (December 2023)</li>
                <li><strong className="text-primary">85%</strong> – Percentage released into U.S. communities</li>
                <li><strong className="text-primary">$150 billion</strong> – Annual cost to American taxpayers</li>
                <li><strong className="text-primary">300,000</strong> – Unaccompanied minors "lost" in the system</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">The Trump Turnaround:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-primary">22,847</strong> – Monthly crossings as of July 2025</li>
                <li><strong className="text-primary">0%</strong> – Catch and release (completely eliminated)</li>
                <li><strong className="text-primary">116,000</strong> – Daily detention capacity funded</li>
                <li><strong className="text-primary">100%</strong> – Prosecution rate for illegal entry</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">How We Got Here: Policy That Puts America First</h2>
            
            <h3 className="text-xl font-semibold mb-3">1. Physical Barriers That Work</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">127 miles</strong> of new wall completed in six months</li>
              <li><strong className="text-primary">30-foot steel barriers</strong> with anti-climb technology</li>
              <li><strong className="text-primary">Advanced sensors</strong> detecting tunnels and breaches</li>
              <li><strong className="text-primary">24/7 drone surveillance</strong> covering entire border</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2. Remain in Mexico Restored and Expanded</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">All asylum seekers</strong> wait outside U.S. borders</li>
              <li><strong className="text-primary">Safe third country agreements</strong> with Guatemala, Honduras, El Salvador</li>
              <li><strong className="text-primary">Zero tolerance</strong> for fraudulent asylum claims</li>
              <li><strong className="text-primary">Expedited removal</strong> within 24 hours for illegal crossers</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3. Interior Enforcement Unleashed</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">Workplace raids</strong> targeting employers of illegal aliens</li>
              <li><strong className="text-primary">Sanctuary city defunding</strong> saving taxpayers billions</li>
              <li><strong className="text-primary">E-Verify mandatory</strong> for all U.S. employers</li>
              <li><strong className="text-primary">State cooperation agreements</strong> multiply ICE effectiveness</li>
            </ul>
            
            
            {/* Deportation Image */}
            <div className="w-full h-64 rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/0b2507d6-1032-43e2-91b4-f0ca89bfbd31.png" 
                alt="ICE deportation operations"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Cartels in Full Retreat</h2>
            
            <p className="mb-4">The criminal organizations that prospered under Biden face extinction:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">Fentanyl seizures up 400%</strong> with new scanning technology</li>
              <li><strong className="text-primary">Human trafficking rings dismantled</strong> through joint task forces</li>
              <li><strong className="text-primary">Cartel finances frozen</strong> through aggressive Treasury actions</li>
              <li><strong className="text-primary">Mexican military cooperation</strong> unprecedented under AMLO's successor</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">What Real Leadership Looks Like</h2>
            
            <p className="mb-4">Unlike Biden's single staged visit, Trump's commitment is genuine:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">Monthly border visits</strong> to assess progress</li>
              <li><strong className="text-primary">Direct communication</strong> with front-line agents</li>
              <li><strong className="text-primary">Immediate response</strong> to emerging threats</li>
              <li><strong className="text-primary">Public support</strong> for law enforcement</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">The Path Forward: Permanent Security</h2>
            
            <p className="mb-4">This is just the beginning. Phase Two includes:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-primary">500 total miles</strong> of new physical barriers by 2026</li>
              <li><strong className="text-primary">Biometric exit tracking</strong> at all ports</li>
              <li><strong className="text-primary">Birthright citizenship</strong> constitutional amendment</li>
              <li><strong className="text-primary">Permanent funding</strong> mechanism for border security</li>
            </ul>
            
            <p className="mb-4"><strong>The border is closed. America is full. Try the legal way or don't try at all.</strong></p>
            
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center mt-8">
              <p className="text-lg font-semibold">
                Stand with President Trump and share this truth. The mainstream media won't report our success – it's up to patriots like you to spread the word.
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