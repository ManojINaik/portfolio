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
    }, 400);
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
    <div className="bg-gradient-to-br from-[#111827] to-[#1E293B] min-h-screen">
      <div className="max-w-[1250px] mx-auto px-3 md:px-4">
        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="fixed top-4 right-4 z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-[var(--bg-card)] text-white hover:bg-[var(--primary)]/10 transition-colors border border-white/8 backdrop-blur-lg shadow-lg"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-5 h-5"
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

        <div className="flex flex-col md:flex-row md:gap-[30px] py-[30px] min-h-screen">
          {/* Profile Section */}
          <aside className={`md:w-[260px] transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 fixed md:sticky top-0 md:top-[30px] left-0 z-40 w-[260px] bg-[var(--bg-dark)]/95 md:bg-transparent px-4 md:px-0 h-screen md:h-fit`}>
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
          <main className="flex-1 w-full md:w-[calc(100%-290px)] pt-16 md:pt-0 smooth-scroll">
            {!isMobileMenuOpen && isMobile && (
              <div className="mb-5">
                <Profile />
              </div>
            )}
            <div className="glass-effect shadow-2xl rounded-2xl overflow-hidden">
              {/* Navigation */}
              <div className="sticky top-0 z-10 backdrop-blur-xl bg-[var(--bg-card)]/95 border-b border-white/8 rounded-t-2xl overflow-hidden">
                <nav className="px-3 md:px-6 h-[60px] flex items-center justify-between">
                  {/* Page Title */}
                  <h1 className="text-lg md:text-2xl font-bold text-white whitespace-nowrap title-slide-in">
                    {activeSection === 'about' ? 'About Me' : getPageTitle(activeSection)}
                  </h1>

                  {/* Navigation Links */}
                  <ul className="flex items-center gap-1.5 md:gap-4 ml-4 overflow-x-auto hide-scrollbar smooth-scroll">
                    {navItems.map((section) => (
                      <li key={section} className="flex-shrink-0">
                        <button
                          className={`relative px-2 md:px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg transition-all duration-300 ${
                            activeSection === section
                              ? 'text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] shadow-md shadow-[var(--primary)]/20'
                              : 'text-[var(--text-secondary)] hover:text-white hover:bg-white/10'
                          } overflow-hidden`}
                          onClick={() => handleNavClick(section)}
                          disabled={isTransitioning}
                          aria-current={activeSection === section ? 'page' : undefined}
                        >
                          <span className="relative z-10 flex items-center gap-1.5">
                            {section === 'github' && (
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.82-.254.82-.567v-2.005c-3.338.722-4.042-1.61-4.042-1.61-.547-1.387-1.334-1.756-1.334-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.29c0 .31.22.678.825.56C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                              </svg>
                            )}
                            {section === 'resume' && (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            )}
                            {section === 'portfolio' && (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            )}
                            {section === 'gallery' && (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            )}
                            {section === 'about' && (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            )}
                            {section === 'contact' && (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            )}
                            {section === 'github' ? 'GitHub' : section.charAt(0).toUpperCase() + section.slice(1)}
                          </span>
                          {activeSection === section && (
                            <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 rounded-lg animate-pulse-slow" />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Content */}
              <div className="p-3 md:p-6 smooth-scroll">
                <div 
                  ref={contentRef}
                  className="page-enter page-enter-active"
                >
                  {renderSection()}
                </div>
              </div>
            </div>
            
            {/* Scroll to top button */}
            <ScrollToTopButton />
          </main>
        </div>
      </div>
      <Analytics />
    </div>
  );
}

// Scroll to top button component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      const mainContent = document.querySelector('main');
      if (mainContent && mainContent.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.addEventListener('scroll', toggleVisibility);
      return () => mainContent.removeEventListener('scroll', toggleVisibility);
    }
  }, []);
  
  const scrollToTop = () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-2 rounded-full bg-[var(--primary)] text-white shadow-lg transition-all duration-300 z-20 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

export default App;
