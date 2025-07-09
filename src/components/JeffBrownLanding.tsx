import { useEffect, useRef } from 'react';
import Navigation from './Navigation';
import AboutBio from './AboutBio';
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
          
          // Trigger pardoned stamp on last timeline item
          const timelineItems = document.querySelectorAll('.timeline-item');
          if (entry.target === timelineItems[timelineItems.length - 1]) {
            setTimeout(() => {
              const stamp = document.getElementById('pardonedStamp');
              if (stamp) {
                stamp.classList.add('show');
                
                // Hide stamp after 3 seconds
                setTimeout(() => {
                  stamp.classList.remove('show');
                }, 3000);
              }
            }, 1000);
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

    // Parallax effect for hero background
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero') as HTMLElement;
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      timelineObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timelineEvents = [
    {
      year: "2017-2020",
      title: "The Patriot",
      description: "Constitutional conservative fighting for American values and the rule of law. Defending traditional principles against progressive overreach and government expansion.",
      image: "/lovable-uploads/6723ba9d-0cb5-45f5-994e-61d8099a7c8a.png",
    },
    {
      year: "January 6, 2021", 
      title: "The Stand",
      description: "Participated in peaceful protest at the Capitol. Exercised First Amendment rights in support of election integrity and constitutional governance, standing with millions of Americans who demanded transparency.",
      image: "/lovable-uploads/ca5fe2f6-c779-4681-a048-51e116c95850.png",
    },
    {
      year: "2021-2024",
      title: "The Persecution", 
      description: "Faced politically motivated prosecution by a weaponized justice system. Experienced firsthand how federal agencies target conservative Americans for exercising constitutional rights.",
      image: "/lovable-uploads/9bcbbf87-78c1-4886-974a-a70b2693bed9.png",
    },
    {
      year: "January 20, 2025",
      title: "The Vindication",
      description: "Presidential pardon restores justice and constitutional order. Historic moment proves that truth prevails over political persecution and government overreach.",
      image: "/lovable-uploads/7fc79b02-bbe0-4a83-b9ac-b3ad6d4432b8.png",
    },
    {
      year: "2025-2028",
      title: "The Movement",
      description: "Building a nationwide conservative coalition to restore constitutional governance, election integrity, and traditional American values across all levels of government.",
      image: "/lovable-uploads/a5f6b7c0-3d2d-4b86-97be-9c275654d4ca.png",
    },
    {
      year: "2028+",
      title: "The Victory",
      description: "Long-term vision for conservative governance: Limited government, constitutional rights, economic freedom, and America First policies that put working families first.",
      image: "/lovable-uploads/6723ba9d-0cb5-45f5-994e-61d8099a7c8a.png",
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

      {/* Reforms Needed Section */}
      <section className="reforms-section">
        <div className="max-w-6xl mx-auto py-24 px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-mono font-900 text-foreground tracking-widest mb-4">REFORMS NEEDED</h2>
            <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">Restoring constitutional governance and ending political persecution</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reform-card reform-card-red">
              <div className="reform-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="reform-title">Justice System Reform</h3>
              <p className="reform-description">End weaponized prosecutions and restore impartial justice for all Americans</p>
            </div>

            <div className="reform-card reform-card-blue">
              <div className="reform-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="reform-title">Media Accountability</h3>
              <p className="reform-description">Combat misinformation campaigns and restore honest journalism</p>
            </div>

            <div className="reform-card reform-card-red">
              <div className="reform-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="reform-title">Government Transparency</h3>
              <p className="reform-description">Release all suppressed January 6th evidence and government communications</p>
            </div>

            <div className="reform-card reform-card-blue">
              <div className="reform-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="reform-title">Election Integrity</h3>
              <p className="reform-description">Address constitutional violations and ensure secure, transparent elections</p>
            </div>

            <div className="reform-card reform-card-red md:col-span-2 lg:col-span-1">
              <div className="reform-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="reform-title">Federal Agency Reform</h3>
              <p className="reform-description">Prevent weaponization of federal agencies against American citizens</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues Cards */}
      <IssuesCards />

      {/* Timeline Section */}
      <section id="timeline" className="timeline-section max-w-6xl mx-auto py-24 px-5 relative" ref={timelineRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-900 text-foreground tracking-widest mb-4">MISSION BRIEF</h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">A patriot's journey through persecution to vindication</p>
        </div>
        
        <div className="timeline-line"></div>

        {timelineEvents.map((event, index) => (
          <div key={event.year} className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <div className="timeline-date">{event.year}</div>
              <img 
                src={event.image} 
                alt={event.title} 
                className="timeline-image"
              />
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-text">{event.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Pardoned Stamp */}
      <div className="pardoned-stamp" id="pardonedStamp">
        PARDONED<br />
        <span style={{ fontSize: '1.5rem' }}>2025</span>
      </div>

      {/* News & Press Section */}
      <NewsPress />

      {/* Enhanced Donation Section */}
      <EnhancedDonation />

      {/* Get Involved Hub */}
      <GetInvolvedHub />

      {/* Policy Platform Section */}
      <section className="bg-secondary py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-mono font-900 text-secondary-foreground tracking-widest mb-8">AMERICA FIRST AGENDA</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-6 rounded border border-border">
              <h3 className="text-xl font-space font-600 text-foreground mb-4">Constitutional Rights</h3>
              <p className="text-muted-foreground font-inter">Defending First and Second Amendment freedoms against government overreach.</p>
            </div>
            <div className="bg-card p-6 rounded border border-border">
              <h3 className="text-xl font-space font-600 text-foreground mb-4">Election Integrity</h3>
              <p className="text-muted-foreground font-inter">Ensuring secure, transparent elections and restoring trust in our democratic process.</p>
            </div>
            <div className="bg-card p-6 rounded border border-border">
              <h3 className="text-xl font-space font-600 text-foreground mb-4">Economic Freedom</h3>
              <p className="text-muted-foreground font-inter">Reducing government regulation and empowering American workers and businesses.</p>
            </div>
          </div>
          <div className="mt-12">
            <button className="donate-button mr-4">SUPPORT THE MOVEMENT</button>
            <button className="donate-button" style={{background: 'transparent', border: '2px solid hsl(var(--accent))', boxShadow: '0 0 20px hsl(var(--accent) / 0.2)'}}>JOIN THE FIGHT</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-16 text-center text-secondary-foreground">
        <div className="text-6xl mb-5">🇺🇸</div>
        <h3 className="text-2xl mb-4 font-mono font-700 tracking-widest uppercase">AMERICAN PATRIOT COALITION</h3>
        <p className="text-lg mb-8 font-mono uppercase tracking-widest">DEFENDING CONSTITUTIONAL RIGHTS • RESTORING JUSTICE • SECURING FREEDOM</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a href="#" className="cta-button" onClick={handleCTAClick}>
            SCHEDULE A CALL
          </a>
          <a href="#" className="cta-button" onClick={handleCTAClick}>
            RESOURCES
          </a>
        </div>
        <div className="text-sm font-mono tracking-widest mb-4">
          TEXT <strong>JBJ6</strong> TO <strong>66055</strong>
        </div>
        <p className="mt-10 opacity-70 font-inter">© 2025 Jeff Brown for Congress • Paid for by Jeff Brown for Congress Committee • Not authorized by any candidate or candidate's committee</p>
      </footer>
    </div>
  );
};

export default JeffBrownLanding;