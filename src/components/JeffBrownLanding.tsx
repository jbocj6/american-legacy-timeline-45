import { useEffect, useRef } from 'react';
import Navigation from './Navigation';
import AboutBio from './AboutBio';
import BookSection from './BookSection';
import IssuesCards from './IssuesCards';
import NewsPress from './NewsPress';
import GetInvolvedHub from './GetInvolvedHub';
import EnhancedDonation from './EnhancedDonation';

const JeffBrownLanding = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

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
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    },
    {
      year: "January 6, 2021", 
      title: "The Stand",
      description: "Exercised First Amendment rights at the Capitol",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
    },
    {
      year: "2021-2024",
      title: "The Persecution", 
      description: "Faced politically motivated prosecution",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
    },
    {
      year: "January 20, 2025",
      title: "The Vindication",
      description: "Presidential pardon restores justice",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    },
    {
      year: "2025-2028",
      title: "The Movement",
      description: "Building conservative coalition nationwide",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
    },
    {
      year: "2028+",
      title: "The Victory",
      description: "America First policies for working families",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
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
          <span className="text-sm">TEXT <strong>JBJ6</strong> TO <strong>66055</strong> • STAND WITH JUSTICE • SUPPORT CONSTITUTIONAL RIGHTS</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Jeff Brown</h1>
          <p className="subtitle font-mono uppercase tracking-widest">CONSERVATIVE LEADER • PROVEN RESULTS • AMERICA FIRST</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button className="donate-button">
              DONATE NOW
            </button>
            <button className="donate-button" style={{background: 'transparent', border: '2px solid hsl(var(--accent))', boxShadow: '0 0 20px hsl(var(--accent) / 0.2)'}}>
              SCHEDULE A CALL
            </button>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => document.querySelector('.reforms-section')?.scrollIntoView({behavior: 'smooth'})}>
          <div className="flex flex-col items-center">
            <span className="text-sm font-mono tracking-widest mb-2">SCROLL</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Bio Section */}
      <AboutBio />

      {/* Book Section */}
      <BookSection />

      {/* Reforms Needed Section */}
      <section className="relative py-24 px-8 overflow-hidden">
        {/* Background gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-primary/5 -z-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="text-sm font-space uppercase tracking-widest text-destructive font-bold">
                Critical Reforms
              </span>
            </div>
            <h2 className="text-5xl font-space font-bold text-foreground mb-6 bg-gradient-to-r from-destructive to-primary bg-clip-text text-transparent">
              Reforms Needed
            </h2>
            <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Restoring constitutional governance and ending political persecution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-background/80 backdrop-blur-sm border border-destructive/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-destructive/40 hover:bg-background/90">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-space font-semibold text-foreground mb-3">Justice System Reform</h3>
              <p className="text-muted-foreground font-inter leading-relaxed">End weaponized prosecutions and restore impartial justice for all Americans</p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm border border-destructive/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-destructive/40 hover:bg-background/90">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-lg font-space font-semibold text-foreground mb-3">Media Accountability</h3>
              <p className="text-muted-foreground font-inter leading-relaxed">Combat misinformation campaigns and restore honest journalism</p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm border border-destructive/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-destructive/40 hover:bg-background/90">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-space font-semibold text-foreground mb-3">Government Transparency</h3>
              <p className="text-muted-foreground font-inter leading-relaxed">Release all suppressed January 6th evidence and government communications</p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm border border-destructive/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-destructive/40 hover:bg-background/90 md:col-span-1 lg:col-span-1">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-space font-semibold text-foreground mb-3">Election Integrity</h3>
              <p className="text-muted-foreground font-inter leading-relaxed">Address constitutional violations and ensure secure, transparent elections</p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm border border-destructive/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-destructive/40 hover:bg-background/90 md:col-span-1 lg:col-span-2">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-space font-semibold text-foreground mb-3">Federal Agency Reform</h3>
              <p className="text-muted-foreground font-inter leading-relaxed">Prevent weaponization of federal agencies against American citizens and restore constitutional boundaries</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="donate-button mr-4">SUPPORT REFORM</button>
            <button className="donate-button bg-transparent border-2 border-destructive text-destructive hover:bg-destructive hover:text-white shadow-[0_0_20px_hsl(var(--destructive)/0.2)]">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Key Issues Cards */}
      <IssuesCards />

      {/* Timeline Section */}
      <section id="timeline" className="py-24 px-8 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden" ref={timelineRef}>
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-accent/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            {/* Enhanced animated title */}
            <div className="relative inline-block">
              <h2 className="text-6xl md:text-7xl font-mono font-900 tracking-widest mb-6 relative">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  MISSION
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-pulse" style={{animationDelay: '0.5s'}}>
                  BRIEF
                </span>
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl -z-10 animate-pulse"></div>
              </h2>
              {/* Star decorations */}
              <div className="absolute -top-4 -left-4 text-accent animate-bounce" style={{animationDelay: '0s'}}>⭐</div>
              <div className="absolute -top-4 -right-4 text-primary animate-bounce" style={{animationDelay: '1s'}}>⭐</div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-accent animate-bounce" style={{animationDelay: '2s'}}>⭐</div>
            </div>
            <p className="text-xl font-inter text-muted-foreground animate-fade-in" style={{animationDelay: '1s'}}>
              A patriot's journey through persecution to vindication
            </p>
          </div>
          
          <div className="relative">
            {/* Enhanced horizontal timeline line with gradient */}
            <div className="absolute top-20 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary via-accent to-transparent rounded-full hidden md:block shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-full animate-pulse"></div>
            </div>
            
            {/* Timeline items with staggered animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.year} 
                  className="timeline-item flex flex-col items-center text-center animate-fade-in hover-scale group"
                  style={{animationDelay: `${index * 0.2 + 1.5}s`}}
                >
                  {/* Enhanced timeline point with pulse effect */}
                  <div className="relative mb-6">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-xl relative z-10 group-hover:scale-125 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-ping opacity-30"></div>
                    </div>
                    {/* Year label floating above */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-accent font-bold bg-background/80 px-2 py-1 rounded border border-accent/30 backdrop-blur-sm">
                      {event.year}
                    </div>
                  </div>
                  
                  {/* Enhanced content card */}
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-accent/50 group-hover:bg-card transform group-hover:-translate-y-2 relative overflow-hidden">
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-28 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105"
                      />
                      <h3 className="text-base font-space font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {event.description}
                      </p>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-accent/20 group-hover:border-t-accent/40 transition-colors duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Success badge floating animation */}
            <div className="absolute -bottom-8 right-8 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 backdrop-blur-sm animate-bounce hidden lg:block" style={{animationDelay: '3s'}}>
              <span className="text-accent font-mono text-sm font-bold">🇺🇸 AMERICAN PATRIOT</span>
            </div>
          </div>
        </div>
      </section>

      {/* News & Press Section */}
      <NewsPress />

      {/* Enhanced Donation Section */}
      <EnhancedDonation />

      {/* Get Involved Hub */}
      <GetInvolvedHub />

      {/* Policy Platform Section */}
      <section className="relative py-24 px-8 overflow-hidden">
        {/* Background gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 -z-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-space uppercase tracking-widest text-primary font-bold">
                Policy Platform
              </span>
            </div>
            <h2 className="text-5xl font-space font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              America First Agenda
            </h2>
            <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Constitutional principles and conservative values for a stronger America
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:bg-background/90 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-3.586a2 2 0 00-2.828 0l-3 3a2 2 0 002.828 2.828l.106-.106a2 2 0 002.828-2.828l-3-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-space font-semibold text-foreground mb-4">Constitutional Rights</h3>
              <p className="text-muted-foreground font-inter leading-relaxed">Defending First and Second Amendment freedoms against government overreach and protecting individual liberties.</p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:bg-background/90 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-space font-semibold text-foreground mb-4">Election Integrity</h3>
              <p className="text-muted-foreground font-inter leading-relaxed">Ensuring secure, transparent elections and restoring trust in our democratic process through accountability.</p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:bg-background/90 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-space font-semibold text-foreground mb-4">Economic Freedom</h3>
              <p className="text-muted-foreground font-inter leading-relaxed">Reducing government regulation and empowering American workers and businesses to thrive and prosper.</p>
            </div>
          </div>

          <div className="text-center">
            <button className="donate-button mr-4">SUPPORT THE MOVEMENT</button>
            <button className="donate-button bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
              JOIN THE FIGHT
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 text-center overflow-hidden">
        {/* Lightning Animation Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Lightning bolts */}
          <div className="lightning-bolt lightning-bolt-1"></div>
          <div className="lightning-bolt lightning-bolt-2"></div>
          <div className="lightning-bolt lightning-bolt-3"></div>
          
          {/* Electric particles */}
          <div className="electric-particle electric-particle-1"></div>
          <div className="electric-particle electric-particle-2"></div>
          <div className="electric-particle electric-particle-3"></div>
          <div className="electric-particle electric-particle-4"></div>
        </div>
        {/* Flag background with blue filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `var(--gradient-hero), url('/lovable-uploads/usa-flag-waving.gif')`
          }}
        ></div>
        
        {/* Content overlay */}
        <div className="relative z-10 text-white">
          <div className="text-6xl mb-5 animate-bounce">🇺🇸</div>
          <h3 className="text-2xl mb-4 font-mono font-700 tracking-widest uppercase">AMERICAN PATRIOT COALITION</h3>
          <p className="text-lg mb-8 font-mono uppercase tracking-widest">DEFENDING CONSTITUTIONAL RIGHTS • RESTORING JUSTICE • SECURING FREEDOM</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#" className="cta-button" onClick={handleCTAClick}>
              SCHEDULE A CALL
            </a>
            <a href="#" className="cta-button" onClick={handleCTAClick}>
              RESOURCES
            </a>
          </div>
          
          {/* Enhanced Text Message Section */}
          <div className="relative mb-8 max-w-3xl mx-auto">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-xl blur-lg animate-pulse" style={{animationDuration: '3s'}}></div>
            
            {/* Main text message container */}
            <div className="relative bg-background/20 backdrop-blur-sm border-2 border-accent/40 rounded-xl p-8 mx-4">
              <div className="text-center">
                <div className="text-sm font-mono uppercase tracking-wider text-accent/80 mb-3">
                  🇺🇸 Join the Movement 🇺🇸
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold tracking-wide leading-tight">
                  TEXT <span className="text-accent">JBJ6</span> TO <span className="text-accent">66055</span>
                </div>
                <div className="text-base md:text-lg font-mono uppercase tracking-widest text-white/80 mt-4">
                  Stand with Constitutional Patriots
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-10 opacity-70 font-inter max-w-4xl mx-auto">
            © 2025 Jeff Brown for Congress • Paid for by Jeff Brown for Congress Committee • Not authorized by any candidate or candidate's committee
          </p>
        </div>
      </footer>
    </div>
  );
};

export default JeffBrownLanding;