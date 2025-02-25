import React, { useState, useEffect } from 'react';

const GitHub = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [githubStats, setGithubStats] = useState({
    totalStars: 0,
    totalForks: 0,
    repositories: 0,
    contributions: 0
  });
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        setError(null);
        const username = 'ManojINaik';

        // Fetch basic stats using GitHub REST API
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();

        // Fetch repositories to calculate total stars
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repository data');
        const reposData = await reposResponse.json();
        
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);

        setGithubStats({
          totalStars,
          totalForks,
          repositories: userData.public_repos,
          contributions: 1347 // Hardcoded from your actual contributions
        });
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setError('Failed to fetch GitHub data. Please try again later.');
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <>
            {/* GitHub Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card p-6 rounded-xl border border-white/5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-[var(--bg-card-hover)] card-shine bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/90 overflow-hidden group">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                  </svg>
                  Most Used Languages
                  <div className="h-0.5 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500 group-hover:w-32 opacity-70 mt-1"></div>
                </h3>
                <div className="bg-[var(--bg-dark)]/40 rounded-lg p-4 shadow-inner">
                  <img 
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=ManojINaik&layout=compact&theme=dark&hide_border=true&bg_color=1F2937&title_color=5E60CE&text_color=ffffff&cache_seconds=1800`}
                    alt="Most Used Languages"
                    className="w-full transition-all duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="card p-6 rounded-xl border border-white/5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-[var(--bg-card-hover)] card-shine bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/90 overflow-hidden group">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
                  </svg>
                  Contribution Graph
                  <div className="h-0.5 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500 group-hover:w-32 opacity-70 mt-1"></div>
                </h3>
                <div className="bg-[var(--bg-dark)]/40 rounded-lg p-4 shadow-inner">
                  <img 
                    src={`https://github-readme-activity-graph.vercel.app/graph?username=ManojINaik&theme=react-dark&hide_border=true&bg_color=1F2937&color=5E60CE&line=64DFDF&point=FFFFFF&area=true&area_color=5E60CE`}
                    alt="Contribution Graph"
                    className="w-full transition-all duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 'contributions':
        return (
          <>
            {/* GitHub Contribution Calendar */}
            <div className="card p-6 rounded-xl border border-white/5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-[var(--bg-card-hover)] card-shine bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/90 overflow-hidden group mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/>
                </svg>
                Contribution Calendar
                <div className="h-0.5 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500 group-hover:w-40 opacity-70 mt-1"></div>
              </h3>
              <div className="bg-[var(--bg-dark)]/40 rounded-lg p-4 shadow-inner">
                <img 
                  src={`https://ghchart.rshah.org/5E60CE/ManojINaik`}
                  alt="GitHub Contribution Calendar"
                  className="w-full transition-all duration-500 hover:scale-105"
                  loading="lazy"
                />
                <p className="text-xs text-[var(--text-secondary)] mt-3 italic text-center">Each square represents your contributions for a day. Darker color means more contributions.</p>
              </div>
            </div>
          </>
        );
      case 'streak':
        return (
          <>
            {/* GitHub Streak Stats */}
            <div className="card p-6 rounded-xl border border-white/5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-[var(--bg-card-hover)] card-shine bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/90 overflow-hidden group">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                </svg>
                Current Streak
                <div className="h-0.5 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500 group-hover:w-28 opacity-70 mt-1"></div>
              </h3>
              <div className="bg-[var(--bg-dark)]/40 rounded-lg p-4 shadow-inner">
                <img 
                  src={`https://streak-stats.demolab.com?user=ManojINaik&theme=dark&hide_border=true&background=1F2937&ring=5E60CE&fire=64DFDF&currStreakLabel=5E60CE&sideLabels=FFFFFF&sideNums=FFFFFF&currStreakNum=64DFDF&dates=888888`}
                  alt="GitHub Streak Stats"
                  className="w-full transition-all duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="flex justify-center gap-6 mt-4 text-center">
                  <div>
                    <div className="text-sm text-[var(--text-secondary)]">Current Streak</div>
                    <div className="text-2xl font-bold text-[var(--accent)]">🔥</div>
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-secondary)]">Total Contributions</div>
                    <div className="text-2xl font-bold text-[var(--primary)]">✨</div>
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-secondary)]">Longest Streak</div>
                    <div className="text-2xl font-bold text-orange-500">⚡</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <section>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight relative overflow-hidden group">
            <span className="relative z-10">GitHub Activity</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </h2>
          <div className="h-px flex-grow max-w-[50px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"></div>
        </div>
        <div className="section-divider mb-8"></div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="w-20 h-20 relative mb-5">
              <div className="animate-spin absolute inset-0 rounded-full h-full w-full border-4 border-gray-700 border-opacity-25"></div>
              <div className="animate-spin absolute inset-0 rounded-full h-full w-full border-4 border-transparent border-t-[var(--primary)] border-l-[var(--accent)]"></div>
            </div>
            <p className="text-[var(--text-secondary)] animate-pulse">Loading GitHub data...</p>
          </div>
        ) : error ? (
          <div className="card p-8 rounded-xl text-center border border-white/5 shadow-xl bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80">
            <div className="text-[var(--primary)] mb-4">
              <svg className="w-20 h-20 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </div>
            <h3 className="text-xl text-white mb-2">Oops! Something went wrong</h3>
            <p className="text-[var(--text-secondary)] mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-primary px-6 py-3 rounded-lg flex items-center gap-2 mx-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
              Retry
            </button>
          </div>
        ) : (
          <>
            {/* GitHub Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="card p-5 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80 text-center relative overflow-hidden service-card-pulse">
                <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[var(--primary)]/5"></div>
                <div className="relative z-10">
                  <svg className="w-8 h-8 mx-auto mb-2 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path>
                    <polyline points="2.32 6.16 12 11 21.68 6.16"></polyline>
                    <line x1="12" y1="22.76" x2="12" y2="11"></line>
                  </svg>
                  <h3 className="text-sm text-[var(--text-secondary)] mb-1">Repositories</h3>
                  <p className="text-3xl font-bold text-[var(--primary)]">{githubStats.repositories}</p>
                </div>
              </div>
              
              <div className="card p-5 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80 text-center relative overflow-hidden service-card-pulse" style={{ animationDelay: '0.1s' }}>
                <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[var(--primary)]/5"></div>
                <div className="relative z-10">
                  <svg className="w-8 h-8 mx-auto mb-2 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <h3 className="text-sm text-[var(--text-secondary)] mb-1">Total Stars</h3>
                  <p className="text-3xl font-bold text-[var(--primary)]">{githubStats.totalStars}</p>
                </div>
              </div>
              
              <div className="card p-5 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80 text-center relative overflow-hidden service-card-pulse" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[var(--accent)]/5"></div>
                <div className="relative z-10">
                  <svg className="w-8 h-8 mx-auto mb-2 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 12H3l4-4 4 4H9m-4 4v-7"></path>
                    <path d="M15 4h4v4"></path>
                    <path d="M16 16v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5"></path>
                    <path d="M19 15V9a2 2 0 0 0-2-2h-6.5"></path>
                  </svg>
                  <h3 className="text-sm text-[var(--text-secondary)] mb-1">Total Forks</h3>
                  <p className="text-3xl font-bold text-[var(--accent)]">{githubStats.totalForks}</p>
                </div>
              </div>
              
              <div className="card p-5 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80 text-center relative overflow-hidden service-card-pulse" style={{ animationDelay: '0.3s' }}>
                <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[var(--accent)]/5"></div>
                <div className="relative z-10">
                  <svg className="w-8 h-8 mx-auto mb-2 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"></path>
                  </svg>
                  <h3 className="text-sm text-[var(--text-secondary)] mb-1">Contributions</h3>
                  <p className="text-3xl font-bold text-[var(--accent)]">{githubStats.contributions}</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 border-b border-gray-700 pb-2">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 rounded-t-lg transition-all duration-300 ${activeTab === 'overview' ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-medium' : 'text-[var(--text-secondary)] hover:text-white'}`}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                    </svg>
                    Overview
                  </div>
                </button>
                <button 
                  onClick={() => setActiveTab('contributions')}
                  className={`px-4 py-2 rounded-t-lg transition-all duration-300 ${activeTab === 'contributions' ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-medium' : 'text-[var(--text-secondary)] hover:text-white'}`}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/>
                    </svg>
                    Contributions
                  </div>
                </button>
                <button 
                  onClick={() => setActiveTab('streak')}
                  className={`px-4 py-2 rounded-t-lg transition-all duration-300 ${activeTab === 'streak' ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-medium' : 'text-[var(--text-secondary)] hover:text-white'}`}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                    </svg>
                    Streak
                  </div>
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="transition-all duration-500">
              {renderTabContent()}
            </div>

            {/* GitHub Profile Link */}
            <div className="mt-12 text-center">
              <a
                href="https://github.com/ManojINaik"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-medium shadow-lg shadow-[var(--primary)]/20 hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22v3.29c0 .31.22.678.825.57A12.02 12.02 0 0024 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="relative z-10">View Full GitHub Profile</span>
              </a>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default GitHub;
