import React, { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Profile from './components/Profile';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef(null);
  const previousSection = useRef(activeSection);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getPageTitle = (section) => {
    switch (section) {
      case 'github':
        return 'GitHub Activity';
      default:
        return section.charAt(0).toUpperCase() + section.slice(1);
    }
  };

  const handleNavClick = async (section) => {
    if (section === activeSection || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Start exit animation
    if (contentRef.current) {
      contentRef.current.classList.remove('page-enter-active');
      contentRef.current.classList.add('page-exit-active');
    }

    // Smooth scroll to top if needed
    const mainContent = document.querySelector('main');
    if (mainContent && mainContent.scrollTop > 0) {
      await new Promise(resolve => {
        mainContent.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        // Wait for scroll to complete
        setTimeout(resolve, 300);
      });
    }

    // Wait for exit animation
    await new Promise(resolve => setTimeout(resolve, 300));

    setActiveSection(section);
    previousSection.current = section;
    setIsMobileMenuOpen(false);

    // Start enter animation
    if (contentRef.current) {
      contentRef.current.classList.remove('page-exit-active');
      contentRef.current.classList.add('page-enter');
      
      requestAnimationFrame(() => {
        if (contentRef.current) {
          contentRef.current.classList.add('page-enter-active');
        }
      });
    }

    // Reset after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
      if (contentRef.current) {
        contentRef.current.classList.remove('page-enter', 'page-enter-active');
      }
    }, 300);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'github':
        return <GitHub />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  const navItems = ['about', 'resume', 'portfolio', 'github', 'gallery', 'contact'];

  return (
    <div className="bg-[#1E1E1E] min-h-screen">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="fixed top-4 right-4 z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-[#2A2A2A] text-white hover:bg-[#FFB400]/10 transition-colors border border-white/8 backdrop-blur-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:gap-[44px] py-[44px] min-h-screen">
          {/* Profile Section */}
          <aside className={`md:w-[275px] transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 fixed md:sticky top-0 md:top-[44px] left-0 z-40 w-[275px] bg-[#1E1E1E]/95 md:bg-transparent px-4 md:px-0 h-screen md:h-fit`}>
            <div className="flex items-center justify-center h-full md:h-auto">
              <Profile />
            </div>
          </aside>

          {/* Mobile Navigation Overlay */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* Main Content Section */}
          <main className="flex-1 w-full md:w-[870px] pt-16 md:pt-0 smooth-scroll">
            {!isMobileMenuOpen && isMobile && (
              <div className="mb-6">
                <Profile />
              </div>
            )}
            <div className="glass-effect shadow-2xl">
              {/* Navigation */}
              <div className="sticky top-0 z-10 backdrop-blur-xl bg-[#1E1E1E]/95 border-b border-white/8 rounded-t-2xl overflow-hidden">
                <nav className="px-4 md:px-8 h-[70px] flex items-center justify-between">
                  {/* Page Title */}
                  <h1 className="text-xl md:text-3xl font-bold text-white whitespace-nowrap title-slide-in">
                    {activeSection === 'about' ? 'About Me' : getPageTitle(activeSection)}
                  </h1>

                  {/* Navigation Links */}
                  <ul className="flex items-center gap-2 md:gap-8 ml-4 overflow-x-auto hide-scrollbar smooth-scroll">
                    {navItems.map((section) => (
                      <li key={section} className="flex-shrink-0">
                        <button
                          className={`relative px-3 md:px-4 py-2 text-sm md:text-base font-medium rounded-xl transition-all duration-300 ${
                            activeSection === section
                              ? 'text-[#FFB400] bg-[#FFB400]/5'
                              : 'text-[#7B7B7B] hover:text-white hover:bg-white/5'
                          } shadow-sm whitespace-nowrap`}
                          onClick={() => handleNavClick(section)}
                          disabled={isTransitioning}
                        >
                          <span className="relative z-10">
                            {section === 'github' ? 'GitHub' : section.charAt(0).toUpperCase() + section.slice(1)}
                          </span>
                          {activeSection === section && (
                            <span className="nav-indicator absolute bottom-0 left-0 w-full h-0.5" />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Content */}
              <div className="p-4 md:p-8 smooth-scroll">
                <div 
                  ref={contentRef}
                  className="page-enter page-enter-active"
                >
                  {renderSection()}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
