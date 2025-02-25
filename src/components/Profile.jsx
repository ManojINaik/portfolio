import React, { useState, useEffect } from 'react';
import ProfileMobile from './mobile/ProfileMobile';

const Profile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (!isInitialized) setIsInitialized(true);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, [isInitialized]);

  // Don't render anything until we've checked the screen size
  if (!isInitialized) return null;

  // Only render mobile version when screen is small AND we're not in the sidebar
  if (isMobile && !document.querySelector('.md\\:sticky')) {
    return <ProfileMobile />;
  }

  const skills = [
    { name: 'Python', level: '90%', color: 'from-indigo-500 to-blue-500' },
    { name: 'JavaScript', level: '85%', color: 'from-amber-500 to-yellow-400' },
    { name: 'React', level: '80%', color: 'from-cyan-500 to-blue-400' },
  ];

  // Desktop version
  return (
    <div className="bg-[var(--bg-card)] rounded-2xl p-3 md:p-4 space-y-3 md:space-y-4 w-full max-w-[260px] border border-white/5 shadow-xl card-shine">
      {/* Profile Image */}
      <div 
        className="relative w-[120px] h-[120px] mx-auto bg-gradient-to-br from-[var(--primary)]/30 to-[var(--accent)]/30 rounded-2xl p-2 shadow-lg enhance-hover group/profile"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="./image.jpg"
          alt="Profile"
          className={`w-full h-full rounded-xl object-cover transition-all duration-500 ${isHovered ? 'scale-[1.03]' : ''}`}
        />
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-[var(--bg-card)] animate-pulse"></div>
        
        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--accent)] rounded-full opacity-70 blur-sm group-hover/profile:animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[var(--primary)] rounded-full opacity-70 blur-sm group-hover/profile:animate-ping delay-150"></div>
      </div>

      {/* Name and Title */}
      <div className="text-center space-y-1.5">
        <h2 className="text-lg font-bold text-white group">
          Manoj Naik
          <div className="h-0.5 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto transition-all duration-300 group-hover:w-full"></div>
        </h2>
        <div className="bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 backdrop-blur-sm rounded-full py-1 px-4 inline-block">
          <p className="text-xs font-medium bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">Software Engineer</p>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Contact Information */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-2 p-1.5 rounded-lg transition-all duration-300 hover:bg-white/5">
          <div className="w-3.5 h-3.5 text-[var(--primary)] flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </div>
          <p className="text-xs text-[var(--text-secondary)] hover:text-white transition-colors break-all">manojinaik@outlook.com</p>
        </div>

        <div className="flex items-center gap-2 p-1.5 rounded-lg transition-all duration-300 hover:bg-white/5">
          <div className="w-3.5 h-3.5 text-[var(--primary)] flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-xs text-[var(--text-secondary)] hover:text-white transition-colors">+91-7676445273</p>
        </div>

        <div className="flex items-center gap-2 p-1.5 rounded-lg transition-all duration-300 hover:bg-white/5">
          <div className="w-3.5 h-3.5 text-[var(--primary)] flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-xs text-[var(--text-secondary)] hover:text-white transition-colors">Mangalore, India</p>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-gradient-to-br from-[var(--bg-dark)]/80 to-[var(--bg-dark)]/50 backdrop-blur-md rounded-lg p-3 space-y-2.5 shadow-inner border border-white/5">
        <h3 className="text-white font-medium text-xs">Main Skills</h3>
        {skills.map((skill, index) => (
          <div key={index} className="space-y-1.5 group/skill">
            <div className="flex justify-between text-xs">
              <span className="text-[var(--text-secondary)] group-hover/skill:text-white transition-colors">{skill.name}</span>
              <span className="text-[var(--text-secondary)] group-hover/skill:text-white transition-colors">{skill.level}</span>
            </div>
            <div className="w-full h-1.5 bg-[var(--bg-dark)] rounded-full overflow-hidden p-[1px]">
              <div 
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out skill-bar-fill group-hover/skill:shadow-[0_0_5px_rgba(255,255,255,0.5)]`}
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Download CV Button */}
      <a 
        href="./ManojResume.pdf" 
        download="ManojResume.pdf"
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full py-2 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:from-[var(--primary-hover)] hover:to-[var(--accent-hover)] text-white text-xs font-medium flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg shadow-[var(--primary)]/20 hover:shadow-[var(--primary)]/40 transform hover:translate-y-[-2px]"
      >
        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:translate-x-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Download CV</span>
      </a>

      {/* Social Links */}
      <div className="flex justify-center items-center gap-3">
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer" 
          className="w-8 h-8 bg-gradient-to-br from-[var(--bg-dark)]/60 to-[var(--bg-dark)]/40 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-[var(--primary)] transition-all duration-300 transform hover:translate-y-[-2px] hover:scale-110 shadow-sm hover:shadow-md"
          aria-label="LinkedIn"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer" 
          className="w-8 h-8 bg-gradient-to-br from-[var(--bg-dark)]/60 to-[var(--bg-dark)]/40 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-[var(--primary)] transition-all duration-300 transform hover:translate-y-[-2px] hover:scale-110 shadow-sm hover:shadow-md"
          aria-label="GitHub"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.82-.254.82-.567v-2.005c-3.338.722-4.042-1.61-4.042-1.61-.547-1.387-1.334-1.756-1.334-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.29c0 .31.22.678.825.56C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noreferrer" 
          className="w-8 h-8 bg-gradient-to-br from-[var(--bg-dark)]/60 to-[var(--bg-dark)]/40 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-[var(--primary)] transition-all duration-300 transform hover:translate-y-[-2px] hover:scale-110 shadow-sm hover:shadow-md"
          aria-label="Twitter"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Profile;
