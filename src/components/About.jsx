import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const awardsRef = useRef(null);
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const bioText = "I enjoy building web applications and exploring AI's potential. My background in Computer Science has given me a solid foundation in software development, and my projects have provided hands-on experience with technologies like Python, JavaScript, and Next.js. I'm looking for an opportunity to contribute to a team and continue learning in a real-world environment.";

  // Terminal typing effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < bioText.length) {
        setTerminalText(prev => prev + bioText.charAt(i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 30);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typing);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (awardsRef.current) observer.observe(awardsRef.current);

    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (awardsRef.current) observer.unobserve(awardsRef.current);
    };
  }, []);

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[var(--primary)]">
          <path d="M16 18l6-6-6-6"></path>
          <path d="M8 6l-6 6 6 6"></path>
        </svg>
      ),
      title: 'Full Stack Development',
      description: 'Proficient in building end-to-end web applications using Python, JavaScript, HTML, CSS, and various frameworks.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[var(--accent)]">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
        </svg>
      ),
      title: 'API Integration',
      description: 'Experience with REST APIs, Gemini API, Ngrok API, and FastAPI for building robust applications.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[var(--primary)]">
          <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
          <rect x="7" y="7" width="3" height="3"></rect>
          <rect x="14" y="7" width="3" height="3"></rect>
          <rect x="7" y="14" width="3" height="3"></rect>
          <rect x="14" y="14" width="3" height="3"></rect>
        </svg>
      ),
      title: 'Database Management',
      description: 'Skilled in MySQL database design, management, and optimization for efficient data handling.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[var(--accent)]">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      title: 'Cloud & DevOps',
      description: 'Basic understanding of Azure Data Fundamentals and experience with Git version control.'
    }
  ];

  const skills = [
    {
      category: "Programming",
      color: "from-blue-500 to-indigo-600",
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg>,
      items: ["Python", "JavaScript", "HTML", "CSS", "C"],
      proficiency: 85
    },
    {
      category: "Technologies",
      color: "from-emerald-500 to-green-600",
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9h-2c0-6.08 4.93-11 11-11s11 4.92 11 11c0 3.09-1.27 5.88-3.32 7.89l-1.41-1.41c1.74-1.69 2.73-4.02 2.73-6.48 0-4.97-4.03-9-9-9zm0 4c-2.76 0-5 2.24-5 5h-2c0-3.86 3.14-7 7-7s7 3.14 7 7c0 1.7-.61 3.26-1.62 4.47l-1.41-1.41c.69-.89 1.03-2 1.03-3.06 0-2.76-2.24-5-5-5zm0 4c-.55 0-1 .45-1 1h-2c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .27-.06.54-.16.78l-1.42-1.42c.04-.11.08-.24.08-.36 0-.55-.45-1-1-1-1z"/></svg>,
      items: ["Next.js", "MySQL", "REST APIs", "Git", "Azure", "Docker"],
      proficiency: 78
    },
    {
      category: "Soft Skills",
      color: "from-orange-500 to-amber-600",
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM6 6c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm6.35-3.92a2.46 2.46 0 1 0 .38 4.9 2.46 2.46 0 0 0-.38-4.9z"/></svg>,
      items: ["Problem Solving", "Communication", "Teamwork", "Time Management"],
      proficiency: 90
    }
  ];
  
  // ASCII art for decoration
  const asciiArt = `
  +-----------------------+
  |                       |
  |   < DEVELOPER />      |
  |                       |
  +-----------------------+
  `;

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* About Me Section */}
      <section>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight font-mono">
            &lt;About_Me /&gt;
          </h2>
          <div className="relative">
            <span className="absolute animate-ping w-2 h-2 rounded-full bg-[var(--primary)] opacity-75"></span>
            <span className="relative w-2 h-2 rounded-full bg-[var(--primary)]"></span>
          </div>
        </div>
        <div className="section-divider"></div>
        <div className="text-[var(--text-secondary)] space-y-4 leading-relaxed text-sm md:text-base">
          {/* Terminal Card */}
          <div className="card p-3 md:p-4 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-[#1E1E1E] card-shine overflow-hidden">
            <div className="bg-[#333333] rounded-t-lg p-2 flex items-center gap-2 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="flex-1 text-center">
                <span className="text-xs text-gray-400 font-mono">terminal</span>
              </div>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex items-start">
                <span className="text-green-400 mr-2">$&gt;</span>
                <div>
                  <span className="text-blue-400">whoami</span>
                  <pre className="mt-1 whitespace-pre-wrap text-cyan-300 font-mono">{asciiArt}</pre>
                  <div className="mt-2">
                    <span className="text-green-400 mr-2">$&gt;</span>
                    <span className="text-blue-400">cat bio.txt</span>
                    <p className="mt-1 text-gray-300">
                      {terminalText}
                      <span className={`inline-block h-4 w-2 bg-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Card */}
          <div className="card p-5 md:p-6 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80 card-shine">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-full overflow-hidden border-2 border-[var(--primary)]/30 shadow-lg shadow-[var(--primary)]/10 p-1 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5">
                <img
                  src="./image.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover img-hover"
                />
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                  <div className="absolute top-0 left-0 w-full h-full">
                    {/* Matrix-like overlay effect */}
                    <div className="matrix-overlay opacity-20"></div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="w-full">
                <div className="text-xs md:text-sm font-mono text-[var(--primary)] mb-2">
                  <span>&lt;!-- Frontend developer with a passion for AI and ML --&gt;</span>
                </div>
                <div className="mb-4 text-xs font-mono">
                  <span className="text-[var(--accent)]">class</span> <span className="text-[var(--primary)]">Developer</span> <span className="text-white">&#123;</span>
                </div>
                <div className="flex flex-col pl-4 mb-2">
                  <span className="text-xs md:text-sm"><span className="text-purple-400">const</span> <span className="text-blue-400">skills</span> = <span className="text-green-400">['JavaScript', 'Python', 'React', 'Next.js']</span>;</span>
                  <span className="text-xs md:text-sm"><span className="text-purple-400">const</span> <span className="text-blue-400">interests</span> = <span className="text-green-400">['AI', 'Machine Learning', 'Cloud Computing']</span>;</span>
                </div>
                <div className="text-xs font-mono">
                  <span className="text-white">&#125;</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* System Specs Style Stats Card */}
          <div className="card p-5 md:p-6 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl hover:border-white/10 card-tilt bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80">
            <div className="font-mono text-xs mb-3 text-[var(--accent)]">// SYSTEM STATS</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 p-3 rounded-lg text-center card-hover relative overflow-hidden">
                <div className="text-2xl font-bold text-white mb-1 font-mono">2+</div>
                <div className="text-xs text-[var(--text-secondary)]">XP_LEVEL</div>
                <div className="absolute -bottom-2 -right-2 opacity-10 text-4xl font-mono text-[var(--primary)]">01</div>
              </div>
              <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 p-3 rounded-lg text-center card-hover relative overflow-hidden">
                <div className="text-2xl font-bold text-white mb-1 font-mono">10+</div>
                <div className="text-xs text-[var(--text-secondary)]">PROJECTS_COMPLETED</div>
                <div className="absolute -bottom-2 -right-2 opacity-10 text-4xl font-mono text-[var(--primary)]">10</div>
              </div>
              <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 p-3 rounded-lg text-center card-hover relative overflow-hidden">
                <div className="text-2xl font-bold text-white mb-1 font-mono">3+</div>
                <div className="text-xs text-[var(--text-secondary)]">ACHIEVEMENTS_UNLOCKED</div>
                <div className="absolute -bottom-2 -right-2 opacity-10 text-4xl font-mono text-[var(--primary)]">11</div>
              </div>
              <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 p-3 rounded-lg text-center card-hover relative overflow-hidden">
                <div className="text-2xl font-bold text-white mb-1 font-mono">5+</div>
                <div className="text-xs text-[var(--text-secondary)]">TECH_STACK_SIZE</div>
                <div className="absolute -bottom-2 -right-2 opacity-10 text-4xl font-mono text-[var(--primary)]">101</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Doing Section */}
      <section ref={servicesRef} className="opacity-0 translate-y-6 transition-all duration-700">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight relative overflow-hidden group font-mono">
            <span className="relative z-10">function <span className="text-[var(--primary)]">myServices</span>() &#123;</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </h2>
          <div className="h-px flex-grow max-w-[50px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"></div>
        </div>
        <div className="section-divider mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card p-6 rounded-xl border border-white/5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-[var(--bg-card-hover)] card-shine bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/90 overflow-hidden group service-card-pulse`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative z-10">
                <div className="font-mono text-xs text-[var(--accent)] mb-3">// {index + 1}</div>
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/10 shadow-inner shadow-[var(--primary)]/5 group-hover:from-[var(--primary)]/25 group-hover:to-[var(--accent)]/15 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 transition-all duration-300 group-hover:text-[var(--accent)] font-mono">
                      {service.title}
                      <div className="h-0.5 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500 group-hover:w-full opacity-70 mt-1"></div>
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base transition-colors duration-300 group-hover:text-white/80">{service.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tr from-transparent via-[var(--primary)]/5 to-[var(--accent)]/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0"></div>
              {/* Binary decoration */}
              <div className="absolute bottom-2 right-2 font-mono text-[8px] text-[var(--primary)]/20">
                {Array(8).fill(0).map((_, i) => 
                  <div key={i}>{Math.random() > 0.5 ? '1' : '0'}{Math.random() > 0.5 ? '1' : '0'}{Math.random() > 0.5 ? '1' : '0'}{Math.random() > 0.5 ? '1' : '0'}</div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="font-mono text-sm text-right mt-4 text-[var(--accent)]">&#125;</div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="opacity-0 translate-y-6 transition-all duration-700">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight font-mono">
            skills = [ ... ]
          </h2>
          <div className="h-px flex-grow max-w-[50px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"></div>
        </div>
        <div className="section-divider"></div>
        <div className="card p-5 md:p-6 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl bg-[#1E1E1E] mb-4">
          <div className="flex mb-4 text-xs font-mono">
            <div className="text-gray-500 select-none mr-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-6">{i + 1}</div>
              ))}
            </div>
            <div className="flex-1">
              <div className="h-6"><span className="text-pink-400">const</span> <span className="text-blue-400">skills</span> <span className="text-white">=</span> <span className="text-yellow-400">&#123;</span></div>
              <div className="h-6 pl-4"><span className="text-green-400">programming:</span> <span className="text-yellow-400">[</span><span className="text-orange-400">'Python'</span><span className="text-white">,</span> <span className="text-orange-400">'JavaScript'</span><span className="text-white">,</span> <span className="text-orange-400">'HTML'</span><span className="text-white">,</span> <span className="text-orange-400">'CSS'</span><span className="text-yellow-400">]</span><span className="text-white">,</span></div>
              <div className="h-6 pl-4"><span className="text-green-400">frameworks:</span> <span className="text-yellow-400">[</span><span className="text-orange-400">'React'</span><span className="text-white">,</span> <span className="text-orange-400">'Next.js'</span><span className="text-white">,</span> <span className="text-orange-400">'FastAPI'</span><span className="text-yellow-400">]</span></div>
              <div className="h-6"><span className="text-yellow-400">&#125;</span></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skillGroup, index) => (
            <div key={index} className="card p-5 md:p-6 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80 card-tilt">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${skillGroup.color} text-white`}>
                  {skillGroup.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white font-mono">{skillGroup.category}</h3>
              </div>
              <div className="mb-4">
                <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skillGroup.color} rounded-full`}
                    style={{ width: `${skillGroup.proficiency}%`, transition: "width 1.5s ease-in-out" }}
                  ></div>
                </div>
                <div className="text-right text-xs text-[var(--text-secondary)] mt-1 font-mono">{skillGroup.proficiency}%</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="skill-tag text-xs inline-flex items-center bg-[var(--bg-card-hover)] px-2 py-1 rounded-md font-mono">
                    <span className="text-[var(--primary)] mr-1">#</span>{skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section ref={awardsRef} className="opacity-0 translate-y-6 transition-all duration-700">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight font-mono">       
            &lt;Achievements /&gt;
          </h2>
          <div className="h-px flex-grow max-w-[50px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"></div>
        </div>
        <div className="section-divider"></div>
        <div className="space-y-6">
          <div className="card p-6 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80 card-shine group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-yellow-500/20 text-amber-500 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="flex-1">
                <div className="font-mono text-xs text-[var(--accent)] mb-1">// Achievement Unlocked</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--primary)] transition-colors font-mono">2nd Runner-Up Hackathon</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">Awarded for the innovative AI-Driven Interview System project, demonstrating expertise in AI and web development.</p>
              </div>
              <div className="hidden md:block font-mono text-xs text-gray-500 shrink-0">
                <div>commit 9a31d72</div>
                <div className="text-[var(--accent)]">+7d6f3e2</div>
              </div>
            </div>
          </div>
          
          <div className="card p-6 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80 card-shine group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-500 relative">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-mono text-xs text-[var(--accent)] mb-1">// Certificate Acquired</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--primary)] transition-colors font-mono">Azure Data Fundamentals</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">Validated knowledge of core data concepts and Azure data services.</p>
              </div>
              <div className="hidden md:block font-mono text-xs text-gray-500 shrink-0">
                <div>commit 7c21e93</div>
                <div className="text-[var(--accent)]">+2b8f7a1</div>
              </div>
            </div>
          </div>
          
          <div className="card p-6 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80 card-shine group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-green-500/20 text-emerald-500">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-mono text-xs text-[var(--accent)] mb-1">// Bug Bounty</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--primary)] transition-colors font-mono">Security Vulnerability Disclosure</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">Identified an XSS injection vulnerability on a government website and reported it to the concerned officials, receiving acknowledgment for the contribution.</p>
              </div>
              <div className="hidden md:block font-mono text-xs text-gray-500 shrink-0">
                <div>commit 3f52a10</div>
                <div className="text-[var(--accent)]">+4e8d9c6</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easter Egg Section - Hidden Konami Code Trigger */}
      <div className="hidden">
        <div id="konami-code" className="text-xs font-mono text-[var(--primary)]">↑↑↓↓←→←→BA</div>
      </div>
    </div>
  );
};

export default About;
