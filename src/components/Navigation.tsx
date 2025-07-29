import { Menu, X, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import DonateModal from './DonateModal';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const navItems = [{
    name: 'MEET JEFF',
    href: '#meet-jeff'
  }, {
    name: 'MY STORY',
    href: '#book-section'
  }, {
    name: 'PRIORITIES',
    href: '#issues'
  }, {
    name: 'NEWS',
    href: '#news'
  }, {
    name: 'GET INVOLVED',
    href: '#get-involved'
  }];
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = 80; // h-20 = 80px
      const additionalOffset = 30; // Extra padding for better visual spacing
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - additionalOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-[60] bg-primary shadow-2xl backdrop-blur-sm">
      {/* Top red bar */}
      <div className="bg-primary border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center h-20">
            {/* Logo/Brand */}
            <a href="#" onClick={e => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }} className="flex-shrink-0 cursor-pointer">
              <img src="/lovable-uploads/b76dd5c2-3af3-42e7-bd95-b1af7f688d5e.png" alt="JBJ6 - Jeff Brown for Congress" className="h-12 w-auto" />
            </a>

            {/* Desktop Navigation - Right aligned */}
            <div className="hidden md:flex flex-1 justify-end items-center space-x-10 mr-8">
              {navItems.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              scrollToSection(item.href);
            }} className="text-primary-foreground hover:text-accent-foreground hover:bg-primary-foreground/10 px-4 py-3 rounded-lg text-lg font-inter font-bold uppercase tracking-widest transition-all duration-200 hover:scale-105 cursor-pointer">
                  {item.name}
                </a>)}
            </div>

            {/* Donate Button */}
            <div className="hidden md:block">
              <button onClick={() => setIsDonateModalOpen(true)} className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded font-mono font-bold text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 uppercase tracking-widest">
                Donate
              </button>
            </div>

            {/* Mobile menu button - Right justified */}
            <div className="md:hidden flex-1 flex justify-end">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary-foreground hover:text-accent-foreground p-3">
                {isMenuOpen ? <X size={28} /> : <MoreVertical size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 z-50">
            <div className="px-6 pt-4 pb-6" style={{backgroundColor: 'rgba(220, 38, 38, 0.3)'}} >
              <div className="space-y-3 text-right mx-0">
                {navItems.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              scrollToSection(item.href);
              setIsMenuOpen(false);
            }} className="text-primary-foreground hover:text-accent-foreground hover:bg-primary-foreground/10 block px-4 py-3 rounded-lg text-lg font-inter font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer">
                    {item.name}
                  </a>)}
              </div>
              <div className="flex justify-end mt-6">
                <button onClick={() => setIsDonateModalOpen(true)} className="bg-accent hover:bg-accent/90 text-accent-foreground py-3 rounded font-mono font-bold text-sm transition-all duration-200 uppercase tracking-widest px-[24px] mx-[21px]">
                  Donate
                </button>
              </div>
            </div>
          </div>}
      </div>
      
      <DonateModal isOpen={isDonateModalOpen} onOpenChange={setIsDonateModalOpen} />
    </nav>;
};
export default Navigation;