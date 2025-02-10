import React from 'react';

const GitHub = () => {
  return (
    <div className="space-y-12">
      <section className="relative">
        <div className="absolute -left-4 top-0 w-1 h-8 bg-[#FFB400]" />
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[#FFB400]"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              GitHub Activity
            </h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FFB400]/10 rounded-full border border-[#FFB400]/20">
            <span className="w-2 h-2 bg-[#FFB400] rounded-full animate-pulse"></span>
            <span className="text-[#FFB400] text-sm font-medium">Live Updates</span>
          </div>
        </div>
        
        {/* GitHub Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="group bg-[#1E1E1E] backdrop-blur-sm rounded-xl border border-gray-800/50 p-6 hover:bg-[#2A2A2A] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-[#FFB400] transition-colors">Contribution Stats</h3>
              <svg className="w-6 h-6 text-[#FFB400] opacity-75 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.25 1c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0113.25 7h-2.5A1.75 1.75 0 019 5.25v-2.5C9 1.784 9.784 1 10.75 1h2.5zM2 16.25c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 016.25 20h-2.5A1.75 1.75 0 012 18.75v-2.5zM17.75 14.5a1.75 1.75 0 00-1.75 1.75v2.5c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0022 18.75v-2.5a1.75 1.75 0 00-1.75-1.75h-2.5z"/>
              </svg>
            </div>
            <div className="bg-[#2A2A2A] rounded-lg p-4">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=ManojINaik&show_icons=true&theme=dark&hide_border=true&bg_color=2A2A2A&title_color=FFB400&icon_color=FFB400&text_color=ffffff&hide_rank=true"
                alt="GitHub Stats"
                className="w-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          
          <div className="group bg-[#1E1E1E] backdrop-blur-sm rounded-xl border border-gray-800/50 p-6 hover:bg-[#2A2A2A] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-[#FFB400] transition-colors">Most Used Languages</h3>
              <svg className="w-6 h-6 text-[#FFB400] opacity-75 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.89 3L14.85 3.4L11.11 21L9.15 20.6L12.89 3M19.59 12L16 8.41V5.58L22.42 12L16 18.41V15.58L19.59 12M1.58 12L8 5.58V8.41L4.41 12L8 15.58V18.41L1.58 12Z"/>
              </svg>
            </div>
            <div className="bg-[#2A2A2A] rounded-lg p-4">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ManojINaik&layout=compact&theme=dark&hide_border=true&bg_color=2A2A2A&title_color=FFB400&text_color=ffffff"
                alt="Top Languages"
                className="w-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* GitHub Contribution Calendar */}
        <div className="group bg-[#1E1E1E] backdrop-blur-sm rounded-xl border border-gray-800/50 p-6 hover:bg-[#2A2A2A] transition-all duration-300 mb-6 transform hover:-translate-y-1 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-[#FFB400] transition-colors">Activity Overview</h3>
            <svg className="w-6 h-6 text-[#FFB400] opacity-75 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <div className="bg-[#2A2A2A] rounded-lg p-4">
            <img 
              src="https://ghchart.rshah.org/FFB400/ManojINaik"
              alt="GitHub Contribution Graph"
              className="w-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* GitHub Streak Stats */}
        <div className="group bg-[#1E1E1E] backdrop-blur-sm rounded-xl border border-gray-800/50 p-6 hover:bg-[#2A2A2A] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-[#FFB400] transition-colors">Current Streak</h3>
            <div className="flex items-center gap-2">
              <span className="text-[#FFB400] text-sm font-medium">Updated Daily</span>
              <svg className="w-6 h-6 text-[#FFB400] opacity-75 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z"/>
              </svg>
            </div>
          </div>
          <div className="bg-[#2A2A2A] rounded-lg p-4">
            <img 
              src="https://github-readme-streak-stats.herokuapp.com?user=ManojINaik&theme=dark&hide_border=true&background=2A2A2A&ring=FFB400&fire=FFB400&currStreakLabel=FFB400&sideLabels=FFFFFF&sideNums=FFFFFF"
              alt="GitHub Streak Stats"
              className="w-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/ManojINaik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-[#FFB400] text-black font-semibold rounded-xl hover:bg-[#FFB400]/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View Full GitHub Profile
          </a>
        </div>
      </section>
    </div>
  );
};

export default GitHub;
