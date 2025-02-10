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

  return (
    <div className="space-y-8">
      <section className="relative">
        <div className="absolute -left-4 top-0 w-1 h-8 bg-[#FFB400]" />
        <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
          GitHub Activity
        </h2>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFB400]"></div>
          </div>
        ) : error ? (
          <div className="bg-[#2A2A2A]/50 rounded-xl p-6 text-center">
            <div className="text-[#FFB400] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </div>
            <p className="text-gray-300 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#FFB400] text-black rounded-lg hover:bg-[#FFB400]/90 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            {/* GitHub Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-1">Repositories</h3>
                <p className="text-2xl font-bold text-[#FFB400]">{githubStats.repositories}</p>
              </div>
              <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-1">Total Stars</h3>
                <p className="text-2xl font-bold text-[#FFB400]">{githubStats.totalStars}</p>
              </div>
              <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-1">Total Forks</h3>
                <p className="text-2xl font-bold text-[#FFB400]">{githubStats.totalForks}</p>
              </div>
              <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-1">Contributions</h3>
                <p className="text-2xl font-bold text-[#FFB400]">{githubStats.contributions}</p>
              </div>
            </div>

            {/* GitHub Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#2A2A2A] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Most Used Languages</h3>
                <img 
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=ManojINaik&layout=compact&theme=dark&hide_border=true&bg_color=2A2A2A&title_color=FFB400&text_color=ffffff&cache_seconds=1800`}
                  alt="Most Used Languages"
                  className="w-full"
                />
              </div>

              <div className="bg-[#2A2A2A] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Contribution Graph</h3>
                <img 
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=ManojINaik&theme=react-dark&hide_border=true&bg_color=2A2A2A&color=FFB400&line=FFB400&point=FFFFFF&area=true&area_color=FFB400`}
                  alt="Contribution Graph"
                  className="w-full"
                />
              </div>
            </div>

            {/* GitHub Contribution Calendar */}
            <div className="bg-[#2A2A2A] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Contribution Calendar</h3>
              <img 
                src={`https://ghchart.rshah.org/FFB400/ManojINaik`}
                alt="GitHub Contribution Calendar"
                className="w-full"
              />
            </div>

            {/* GitHub Streak Stats */}
            <div className="bg-[#2A2A2A] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Current Streak</h3>
              <img 
                src={`https://streak-stats.demolab.com?user=ManojINaik&theme=dark&hide_border=true&background=2A2A2A&ring=FFB400&fire=FFB400&currStreakLabel=FFB400&sideLabels=FFFFFF&sideNums=FFFFFF&currStreakNum=FFB400&dates=888888`}
                alt="GitHub Streak Stats"
                className="w-full"
              />
            </div>

            {/* GitHub Profile Link */}
            <div className="mt-8 text-center">
              <a
                href="https://github.com/ManojINaik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-[#FFB400] text-black rounded-lg hover:bg-[#FFB400]/90 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22v3.29c0 .31.22.678.825.57A12.02 12.02 0 0024 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                View Full GitHub Profile
              </a>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default GitHub;
