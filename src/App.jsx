import React, { useState } from 'react';
import Profile from './components/Profile';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import GitHub from './components/GitHub';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getPageTitle = (section) => {
    switch (section) {
      case 'github':
        return 'GitHub Activity';
      default:
        return section.charAt(0).toUpperCase() + section.slice(1);
    }
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
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  const navItems = ['about', 'resume', 'portfolio', 'github', 'contact'];

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#1E1E1E] min-h-screen">
      <div className="max-w-[1300px] mx-auto">
        {/* Mobile Menu Button */}
        <div className="md:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-[#2A2A2A] text-white hover:bg-[#FFB400]/10 transition-colors"
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

        <div className="flex flex-col md:flex-row md:gap-[44px] py-[44px] min-h-screen">
          {/* Profile Section */}
          <aside className={`md:w-[275px] transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 fixed md:sticky md:top-[44px] left-0 h-[calc(100vh-88px)] z-40 w-[275px] bg-[#1E1E1E] md:bg-transparent`}>
            <Profile />
          </aside>

          {/* Mobile Navigation Overlay */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* Main Content Section */}
          <main className="flex-1 w-[870px] pt-16 md:pt-0">
            <div className="glass-effect rounded-2xl shadow-xl">
              {/* Navigation */}
              <div className="sticky top-0 z-10 bg-[#1E1E1E] border-b border-white/10 rounded-t-2xl">
                <nav className="px-8 h-[70px] flex items-center justify-between">
                  {/* Page Title */}
                  <h1 className="text-3xl font-bold text-white">
                    {activeSection === 'about' ? 'About Me' : getPageTitle(activeSection)}
                  </h1>

                  {/* Navigation Links */}
                  <ul className="flex items-center gap-8">
                    {navItems.map((section) => (
                      <li key={section}>
                        <button
                          className={`relative px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                            activeSection === section
                              ? 'text-[#FFB400] bg-[#FFB400]/5'
                              : 'text-[#7B7B7B] hover:text-white hover:bg-white/5'
                          } shadow-sm`}
                          onClick={() => handleNavClick(section)}
                        >
                          <span className="relative z-10 whitespace-nowrap">
                            {section === 'github' ? 'GitHub' : section.charAt(0).toUpperCase() + section.slice(1)}
                          </span>
                          {activeSection === section && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFB400]" />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="animate-fadeIn">
                  {renderSection()}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
