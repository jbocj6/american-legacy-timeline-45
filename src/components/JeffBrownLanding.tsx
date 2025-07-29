import { useState, useEffect, useRef } from 'react';
import Navigation from './Navigation';
import AboutBio from './AboutBio';
import BookSection from './BookSection';
import IssuesCards from './IssuesCards';
import NewsPress from './NewsPress';
import GetInvolvedHub from './GetInvolvedHub';
import DonateModal from './DonateModal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


const JeffBrownLanding = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for Timeline Animations
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // Trigger animation on last timeline item
          const timelineItems = document.querySelectorAll('.timeline-item');
          if (entry.target === timelineItems[timelineItems.length - 1]) {
            // Animation for last item completion
          }
        }
      });
    }, observerOptions);

    // Observe all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    // Timeline point bounce effect
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const point = entry.target.querySelector('.timeline-point') as HTMLElement;
          if (point) {
            point.style.animation = 'bounce 0.6s ease-out 0.5s';
          }
        }
      });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => timelineObserver.observe(item));

    return () => {
      observer.disconnect();
      timelineObserver.disconnect();
    };
  }, []);

  const timelineEvents = [
    {
      year: "2017-2020",
      title: "The Patriot",
      description: "Constitutional conservative fighting for American values",
      image: "/lovable-uploads/fe3392e0-ffa5-4364-a4ae-f65517f0bc88.png",
    },
    {
      year: "January 6, 2021", 
      title: "The Stand",
      description: "Exercised First Amendment rights at the Capitol",
      image: "/lovable-uploads/f4df3228-71b8-4df3-a4b3-80ce9ef6b880.png",
    },
    {
      year: "2021-2024",
      title: "The Persecution", 
      description: "Faced politically motivated prosecution",
      image: "/lovable-uploads/fd21dff2-aae6-4617-9239-7b27b6a3dd09.png",
    },
    {
      year: "January 20, 2025",
      title: "The Vindication",
      description: "Presidential pardon restores justice",
      image: "/lovable-uploads/8a7efeac-fd06-4f1f-b613-b5bb958640e3.png",
    },
    {
      year: "2025-2028",
      title: "The Movement",
      description: "Building conservative coalition nationwide",
      image: "/lovable-uploads/80ac080f-7e6a-4e88-bee8-32843fff046a.png",
    },
    {
      year: "2028+",
      title: "The Victory",
      description: "America First policies for working families",
      image: "/lovable-uploads/b5330b6e-db80-432c-964c-db835cb95315.png",
    }
  ];

  const policyData = [
    {
      title: "Constitutional Rights",
      description: "Defending First and Second Amendment freedoms against government overreach and protecting individual liberties.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Election Integrity",
      description: "Ensuring secure, transparent elections and restoring trust in our democratic process through accountability.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Economic Freedom",
      description: "Reducing government regulation and empowering American workers and businesses to thrive and prosper.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const reformData = [
    {
      title: "Justice System Reform",
      description: "End weaponized prosecutions and restore impartial justice for all Americans",
      icon: (
        <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: "Media Accountability",
      description: "Combat misinformation campaigns and restore honest journalism",
      icon: (
        <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      title: "Government Transparency",
      description: "Release all suppressed January 6th evidence and government communications",
      icon: (
        <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Election Integrity",
      description: "Address constitutional violations and ensure secure, transparent elections",
      icon: (
        <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Federal Agency Reform",
      description: "Prevent weaponization of federal agencies against American citizens and restore constitutional boundaries",
      icon: (
        <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Campaign Banner */}
      <div className="campaign-banner">
        <div className="max-w-4xl mx-auto">
          <span className="text-sm">
            <span className="max-md:hidden">STAND WITH JUSTICE • </span>SUPPORT CONSTITUTIONAL RIGHTS
          </span>
        </div>
      </div>

      {/* Hero Section - Outside seamless background */}
      <section className="hero relative md:min-h-screen max-md:h-[60vh]">
        {/* Jeff Brown Portrait - Mobile responsive positioning */}
        <img 
          src="/lovable-uploads/719ad38e-9ed6-4a9a-a1d1-f4e27b328670.png" 
          alt="Jeff Brown Portrait" 
          className="absolute right-[-15%] bottom-[-2%] h-[87vh] w-auto object-contain z-30 scale-110 
                     md:right-[-5%] md:bottom-[-2%] md:h-[87vh] md:scale-110
                     max-md:top-[95px] max-md:left-0 max-md:right-0 max-md:w-full max-md:h-[calc(60vh-95px)] max-md:object-cover max-md:object-top
                     hero-headshot-mobile"
        />
        
        {/* Hero Content - Mobile responsive positioning */}
        <div className="absolute bottom-[20%] left-[5%] z-40 
                        md:bottom-[20%] md:left-[5%]
                        max-md:bottom-[5%] max-md:left-[50%] max-md:transform max-md:-translate-x-1/2 max-md:translate-y-[60px] max-md:text-center max-md:w-full max-md:px-4">
          <h1 className="text-8xl font-mono font-900 tracking-widest mb-4 text-white drop-shadow-lg
                         md:text-8xl md:mb-4
                         max-md:!text-9xl max-md:mb-2 max-md:tracking-wider max-md:hero-text-outline
                         max-sm:!text-8xl max-sm:mb-1 max-sm:tracking-wide">
            Jeff Brown
          </h1>
          <p className="subtitle font-mono uppercase tracking-widest text-white drop-shadow-lg
                        md:text-base md:mb-8
                        max-md:text-xs max-md:tracking-wider max-md:mb-2
                        max-sm:text-xs max-sm:tracking-wide max-sm:mb-2 max-md:hidden">
            PATRIOT • PROVEN LEADER • AMERICA FIRST
          </p>
          {/* Mobile-only patriot text */}
          <div className="font-mono uppercase tracking-widest text-white text-xl mb-2 md:hidden font-bold hero-text-outline">
            <div>PATRIOT • PROVEN LEADER</div>
            <div>AMERICA FIRST</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8
                          md:flex-row md:gap-4 md:mt-8
                          max-md:flex-col max-md:gap-0 max-md:mt-1 max-md:items-center
                          hero-buttons-mobile">
            <button 
              onClick={() => setIsDonateModalOpen(true)}
              className="donate-button max-md:w-64 max-md:py-2 max-md:text-sm max-md:-mb-2"
            >
              DONATE NOW
            </button>
            <a 
              href="https://calendly.com/bhogan-revgenengines/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="donate-button max-md:w-64 max-md:py-2 max-md:text-sm max-md:-mb-2" 
              style={{background: 'white', color: 'black', border: '2px solid white', boxShadow: '0 0 20px rgba(255,255,255,0.2)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}
            >
              BOOK A ONE-ON-ONE
            </a>
            <button 
              className="donate-button max-md:w-64 max-md:py-2 max-md:text-sm" 
              style={{background: 'hsl(var(--destructive))', color: 'white', border: '2px solid hsl(var(--destructive))', boxShadow: '0 0 20px hsl(var(--destructive) / 0.3)'}}
              onClick={() => document.getElementById('book-section')?.scrollIntoView({behavior: 'smooth'})}
            >
              READ JEFF'S BOOK
            </button>
          </div>
        </div>
        
        {/* Social Media Icons - Lower Right Corner */}
        <div className="absolute bottom-8 right-8 z-50 flex gap-3 hero-social-mobile">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/jeffreybrownj6/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          {/* X (Twitter) */}
          <a 
            href="https://x.com/jeffreybrownj6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          
          {/* Truth Social */}
          <a 
            href="https://truthsocial.com/@jeffreybrownj6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v4H14v12h-4V8H4V4z"/>
              <rect x="16" y="14" width="4" height="4" fill="currentColor"/>
            </svg>
          </a>
          
          {/* Rumble */}
          <a 
            href="https://rumble.com/user/Jeffreybrownj6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
          </a>
        </div>

        <div className="scroll-indicator z-50" onClick={() => document.querySelector('.reforms-section')?.scrollIntoView({behavior: 'smooth'})}>
          <div className="flex flex-col items-center">
            <span className="text-sm font-mono tracking-widest mb-2">SCROLL</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Background Container - Content sections only */}
      <div className="seamless-background">

      {/* About/Bio Section */}
      <AboutBio />

      {/* Book Section */}
      <BookSection />

      {/* Reforms Needed Section */}
      <section className="relative py-24 px-8 overflow-hidden">
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 max-md:mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="text-sm font-space uppercase tracking-widest text-destructive font-bold">
                Critical Reforms
              </span>
            </div>
            <h2 className="text-6xl font-space font-bold text-foreground mb-6 bg-gradient-to-r from-destructive to-primary bg-clip-text text-transparent
                          max-md:text-4xl max-md:mb-4
                          max-sm:text-3xl max-sm:mb-3">
              Reforms Needed
            </h2>
            <p className="text-2xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 max-md:!mb-4
                         max-md:text-lg max-md:leading-relaxed
                         max-sm:text-base max-sm:leading-normal">
              Restoring constitutional governance and ending political persecution
            </p>
          </div>

          {/* Desktop version - Cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {reformData.map((reform, index) => (
              <div key={index} className="bg-background/80 backdrop-blur-sm border border-destructive/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-destructive/40 hover:bg-background/90 text-center">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  {reform.icon}
                </div>
                <h3 className="text-lg font-space font-semibold text-foreground mb-3">{reform.title}</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">{reform.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile version - Accordion */}
          <div className="md:hidden mb-8">
            <Accordion type="multiple" className="space-y-4 max-md:!mt-0">
              {reformData.map((reform, index) => (
                <AccordionItem 
                  key={index} 
                  value={`reform-${index}`}
                  className="bg-background/80 backdrop-blur-sm border border-destructive/20 rounded-xl px-4 data-[state=open]:bg-background/90 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                >
                  <AccordionTrigger className="font-space font-semibold text-foreground hover:no-underline py-4 text-left max-md:!text-sm [&[data-state=open]>svg]:rotate-180">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center">
                        {reform.icon}
                      </div>
                      {reform.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <p className="text-muted-foreground font-inter leading-relaxed ml-11">{reform.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </section>

      {/* Key Issues Cards */}
      <IssuesCards />

      {/* Timeline Section */}
      <section id="timeline" className="py-24 px-8 relative" ref={timelineRef}>
        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-2">
            {/* Keep the animated title the user likes */}
            <div className="relative inline-block">
              <div className="inline-flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2}></circle>
                  <polyline points="12,6 12,12 16,14" strokeWidth={2}></polyline>
                </svg>
                <span className="text-sm font-space uppercase tracking-widest text-destructive font-bold">TIMELINE</span>
              </div>
              <h2 className="text-6xl font-space font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
                            max-md:text-4xl max-md:mb-4
                            max-sm:text-3xl max-sm:mb-3">
                Jeffrey's Journey
              </h2>
            </div>
            
            {/* Subtitle */}
            <div className="flex justify-center">
              <p className="text-2xl font-inter text-muted-foreground animate-fade-in
                         max-md:text-lg max-md:leading-relaxed
                         max-sm:text-base max-sm:leading-normal" 
                 style={{
                   animationDelay: '1.2s'
                 }}>
                The Road to Truth
              </p>
            </div>
          </div>

          {/* Responsive Timeline */}
          <div className="relative">
            {/* Desktop: Central vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>
            
            {/* Mobile: Animated treasure trail line */}
            <svg 
              className="absolute inset-0 w-full h-full md:hidden z-[-1]"
              viewBox="0 0 400 1000"
              preserveAspectRatio="none"
            >
              <path
                id="treasure-trail"
                d="M200,80 L200,920"
                stroke="#dc2626"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="8 4"
                strokeDashoffset="840"
                className="animate-drawTreasureTrail"
                style={{ animationDelay: '2s' }}
              />
            </svg>
            
            {/* Timeline items */}
            <div className="space-y-16 md:space-y-16 mt-8">
              {timelineEvents.map((event, index) => (
                 <div 
                   key={event.year}
                   className={`timeline-item relative animate-fade-in z-10
                     md:flex md:items-center
                     ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                     flex flex-col
                   `}
                   style={{animationDelay: `${index * 0.3 + 1.8}s`}}
                 >
                  {/* Desktop timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-xl z-10 hidden md:block hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-ping opacity-30"></div>
                  </div>
                  
                  {/* Date - Mobile: Badge, Desktop: Side placement */}
                  <div className={`
                    flex-none w-full md:w-1/2 
                    ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} 
                    text-center md:text-inherit mb-4 md:mb-0
                  `}>
                     <div className="
                       inline-block px-4 py-2 rounded-full
                       bg-destructive md:bg-transparent
                       text-white md:text-destructive/70
                       text-lg md:text-6xl lg:text-8xl font-mono font-black leading-none
                     ">
                       {event.year}
                     </div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`flex-none w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                    <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-accent/50 transform hover:-translate-y-2 group relative overflow-hidden">
                      {/* Desktop card connector line */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-accent hidden md:block ${
                        index % 2 === 0 ? '-left-8' : '-right-8'
                      }`}></div>
                      
                      {/* Card glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      
                      <div className="relative z-10">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-40 md:h-48 object-cover rounded-xl mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-105"
                        />
                        <h3 className={`
                          text-xl md:text-2xl font-space font-bold text-foreground mb-3 md:mb-4 group-hover:text-accent transition-colors duration-300 
                          ${['The Stand', 'The Vindication', 'The Victory'].includes(event.title) ? 'md:text-right' : ''}
                        `}>
                          {event.title}
                        </h3>
                        <p className={`
                          text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 
                          ${['The Stand', 'The Vindication', 'The Victory'].includes(event.title) ? 'md:text-right' : ''}
                        `}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Add custom keyframes for typewriter effect */}
        <style>{`
          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: hsl(var(--accent)); }
          }
        `}</style>
      </section>

      {/* News & Press Section */}
      <NewsPress />


      {/* Get Involved Hub */}
      <GetInvolvedHub />

      {/* Policy Platform Section */}
      <section className="relative py-24 px-8 overflow-hidden">
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-space uppercase tracking-widest text-primary font-bold">
                Policy Platform
              </span>
            </div>
            <h2 className="text-6xl font-space font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent max-md:text-4xl max-sm:text-3xl">
              America First Agenda
            </h2>
            <p className="text-2xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Constitutional principles and conservative values for a stronger America
            </p>
          </div>

          {/* Desktop version - Cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mb-12">
            {policyData.map((policy, index) => (
              <div key={index} className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:bg-background/90 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {policy.icon}
                </div>
                <h3 className="text-xl font-space font-semibold text-foreground mb-4">{policy.title}</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">{policy.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile version - Accordion */}
          <div className="md:hidden mb-12">
            <Accordion type="multiple" className="space-y-4">
              {policyData.map((policy, index) => (
                <AccordionItem 
                  key={index} 
                  value={`policy-${index}`}
                  className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-xl px-4 data-[state=open]:bg-background/90 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  <AccordionTrigger className="font-space font-semibold text-foreground hover:no-underline py-4 text-left max-md:!text-sm [&[data-state=open]>svg]:rotate-180">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        {policy.icon}
                      </div>
                      {policy.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <p className="text-muted-foreground font-inter leading-relaxed ml-11">{policy.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setIsDonateModalOpen(true)}
              className="donate-button mr-4"
            >
              SUPPORT THE MOVEMENT
            </button>
            <button 
              onClick={() => {
                const target = document.querySelector('#get-involved');
                if (target) {
                  const navbarHeight = 80; // h-20 = 80px
                  const additionalOffset = 30; // Extra padding for better visual spacing
                  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - additionalOffset;
                  
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="donate-button bg-transparent border-2 border-primary text-white hover:bg-primary hover:text-white shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
            >
              JOIN THE FIGHT
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 text-center overflow-hidden">
        {/* Flag background with blue filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `var(--gradient-hero), url('/lovable-uploads/usa-flag-waving.gif')`
          }}
        ></div>
        
        {/* Content overlay */}
        <div className="relative z-10 text-white">
          
          {/* Enhanced Text Message Section */}
          <div className="relative mb-8 max-w-3xl mx-auto">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-xl blur-lg animate-pulse" style={{animationDuration: '3s'}}></div>
            
            {/* Main text message container */}
            <div className="relative bg-background/20 backdrop-blur-sm border-2 border-accent/40 rounded-xl p-8 mx-4">
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
                  {/* Cash App - Red Envelope */}
                  <div className="qr-card group">
                    <a 
                      href="https://cash.app/$JeffreyBrownJ6?qr=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img 
                        src="/lovable-uploads/420ff39e-62d5-4c12-9574-d84f02460858.png" 
                        alt="Cash App QR Code" 
                        className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/30 cursor-pointer"
                        style={{ imageRendering: 'crisp-edges' }}
                      />
                    </a>
                  </div>

                  {/* Venmo - White Envelope */}
                  <div className="qr-card group">
                    <a 
                      href="https://account.venmo.com/u/JeffreyBrownJ6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img 
                        src="/lovable-uploads/47b0e0a6-ce08-4dfa-9fee-8c3770a6a8b9.png" 
                        alt="Venmo QR Code" 
                        className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/30 cursor-pointer"
                        style={{ imageRendering: 'crisp-edges' }}
                      />
                    </a>
                  </div>

                  {/* Give Send Go - Blue Envelope */}
                  <div className="qr-card group">
                    <a 
                      href="https://www.givesendgo.com/theroadforward"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img 
                        src="/lovable-uploads/abb6f57c-b8f2-4420-9f1c-ccb0b4d313a2.png" 
                        alt="Give Send Go QR Code" 
                        className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/30 cursor-pointer"
                        style={{ imageRendering: 'crisp-edges' }}
                      />
                    </a>
                  </div>
                </div>
                <div className="text-4xl md:text-4xl font-mono font-semibold uppercase tracking-widest text-white/80 mt-4">
                  POWER OUR MISSION
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg mb-8 font-mono uppercase tracking-widest">
            <span className="hidden sm:inline">DEFENDING CONSTITUTIONAL RIGHTS • RESTORING JUSTICE • SECURING FREEDOM</span>
            <span className="sm:hidden flex flex-col gap-2 text-center">
              <span>DEFENDING CONSTITUTIONAL RIGHTS</span>
              <span>RESTORING JUSTICE</span>
              <span>SECURING FREEDOM</span>
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="https://calendly.com/bhogan-revgenengines/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="donate-button max-sm:w-[280px]"
              style={{background: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))', border: '2px solid hsl(var(--accent))', boxShadow: '0 0 20px hsl(var(--accent) / 0.3)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}
            >
              BOOK A ONE-ON-ONE
            </a>
          </div>
          
          {/* Social Media Links */}
          <div className="flex gap-4 justify-center mb-12">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/jeffreybrownj6/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            {/* X (Twitter) */}
            <a 
              href="https://x.com/jeffreybrownj6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* Truth Social */}
            <a 
              href="https://truthsocial.com/@jeffreybrownj6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h16v4H14v12h-4V8H4V4z"/>
                <rect x="16" y="14" width="4" height="4" fill="currentColor"/>
              </svg>
            </a>
            
            {/* Rumble */}
            <a 
              href="https://rumble.com/user/Jeffreybrownj6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            </a>
          </div>
          
          <p className="mt-10 opacity-70 font-inter max-w-4xl mx-auto">
            © 2025 Jeff Brown
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <a 
              href="/terms-conditions" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 underline underline-offset-4"
            >
              Terms & Conditions
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="/privacy-policy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 underline underline-offset-4"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
      
      </div> {/* End seamless background container */}
      
      <DonateModal 
        isOpen={isDonateModalOpen} 
        onOpenChange={setIsDonateModalOpen} 
      />
    </div>
  );
};

export default JeffBrownLanding;