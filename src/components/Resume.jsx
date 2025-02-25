import React, { useState, useEffect } from 'react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [isVisible, setIsVisible] = useState(false);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    // Initialize skills data
    setSkills([
      { 
        name: 'Front-end Development', 
        level: '85%', 
        color: 'from-[var(--primary)] to-[var(--accent)]',
        technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] 
      },
      { 
        name: 'Back-end Development', 
        level: '70%', 
        color: 'from-[#6930C3] to-[var(--primary)]',
        technologies: ['Node.js', 'Express', 'MongoDB'] 
      },
      { 
        name: 'UI/UX Design', 
        level: '75%', 
        color: 'from-[#56C7C7] to-[var(--accent)]',
        technologies: ['Figma', 'Adobe XD', 'User Testing'] 
      },
      { 
        name: 'Mobile Development', 
        level: '60%', 
        color: 'from-[#7209B7] to-[#F72585]',
        technologies: ['React Native', 'Flutter basics'] 
      }
    ]);
  }, []);

  const education = [
    {
      institution: 'Srinivas Institute of Technology, Mangalore',
      degree: 'Bachelor of Engineering, Computer Science',
      year: '2021-25',
      details: 'CGPA: 6.0',
      achievements: [
        'Participated in coding competitions and hackathons',
        'Active member of the college technical club',
        'Completed courses in advanced algorithms and data structures'
      ],
      logo: '🎓'
    },
    {
      institution: 'Govt PU College, Byndoor',
      degree: 'PUC, Computer Science',
      year: '2019-21',
      details: 'Secured 1st class',
      achievements: [
        'Participated in regional science fairs',
        'Received academic excellence award'
      ],
      logo: '🎓'
    },
    {
      institution: 'RNS Vidyanikethan',
      degree: 'SSLC',
      year: '2018-19',
      details: 'Secured 1st class',
      achievements: [
        'Active participant in extracurricular activities',
        'Recipient of merit scholarship'
      ],
      logo: '🎓'
    }
  ];

  const experience = [
    {
      role: 'Intern',
      company: 'Samagra Technologies',
      location: 'Online',
      duration: '10/2023-11/2023',
      details: [
        'Gained practical experience in full-stack web development during a 6-week internship, contributing to real-world projects.',
        'Collaborated with experienced mentors, actively participating in project development and gaining hands-on experience with industry best practices.',
        'Enhanced problem-solving abilities and deepened understanding of software development lifecycles and methodologies.'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      logo: '💼'
    }
  ];

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: 'Jan 2023',
      link: '#',
      logo: '🏆'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'Mar 2023',
      link: '#',
      logo: '🏆'
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'Dec 2022',
      link: '#',
      logo: '🏆'
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'education':
        return (
          <div className="space-y-8 animate-fadeIn">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="card p-6 rounded-xl border border-white/5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-[var(--bg-card-hover)] card-shine bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/90 overflow-hidden group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl flex-shrink-0 opacity-80 group-hover:opacity-100 transition-all mt-1">
                      {edu.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">{edu.institution}</h3>
                      <p className="text-[var(--primary)] text-base mb-1">{edu.degree}</p>
                      <p className="text-sm text-[var(--text-secondary)]/90">{edu.details}</p>
                    </div>
                  </div>
                  <span className="text-[var(--accent)] text-sm px-4 py-1.5 bg-[var(--primary)]/10 rounded-full font-medium shadow-inner">
                    {edu.year}
                  </span>
                </div>
                
                {edu.achievements && (
                  <div className="mt-3 pl-3 border-l-2 border-[var(--primary)]/30 ml-1">
                    <h4 className="text-sm font-medium text-white/80 mb-2">Achievements:</h4>
                    <ul className="space-y-1.5">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                          <svg className="w-4 h-4 text-[var(--primary)]/70 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="h-0.5 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500 group-hover:w-full opacity-70 mt-4"></div>
              </div>
            ))}
          </div>
        );
      case 'experience':
        return (
          <div className="space-y-8 animate-fadeIn">
            {experience.map((exp, index) => (
              <div 
                key={index} 
                className="card p-6 rounded-xl border border-white/5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-[var(--bg-card-hover)] card-shine bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/90 overflow-hidden group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl flex-shrink-0 opacity-80 group-hover:opacity-100 transition-all mt-1">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">{exp.role}</h3>
                      <p className="text-[var(--primary)] text-base mb-1">{exp.company}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{exp.location}</p>
                    </div>
                  </div>
                  <span className="text-[var(--accent)] text-sm px-4 py-1.5 bg-[var(--primary)]/10 rounded-full font-medium shadow-inner">
                    {exp.duration}
                  </span>
                </div>
                
                <div className="bg-[var(--bg-dark)]/40 rounded-lg p-4 shadow-inner">
                  <h4 className="text-sm font-medium text-white/80 mb-3">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-3">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-[var(--text-secondary)] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[var(--primary)]/30 before:rounded-full group/item">
                        <div className="absolute top-[0.6em] left-0 w-2 h-2 rounded-full bg-[var(--primary)] opacity-0 group-hover/item:opacity-100 transition-all duration-300"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {exp.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--accent)] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="h-0.5 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500 group-hover:w-full opacity-70 mt-4"></div>
              </div>
            ))}
          </div>
        );
      case 'skills':
        return (
          <div className="animate-fadeIn">
            {/* Skills Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="card p-6 rounded-xl border border-white/5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-[var(--bg-card-hover)] card-shine bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/90 overflow-hidden group"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <svg className={`w-5 h-5 text-[${skill.color.split(' ')[1].replace('from-', '').replace(']', '')}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v6h-2V7zm0 8h2v2h-2v-2z"/>
                    </svg>
                    {skill.name}
                    <div className="h-0.5 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500 group-hover:w-32 opacity-70 mt-1"></div>
                  </h3>
                  
                  <div className="mb-5">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-[var(--text-secondary)]">Proficiency</span>
                      <span className="text-[var(--accent)]">{skill.level}</span>
                    </div>
                    <div className="h-2.5 bg-[var(--bg-dark)]/70 rounded-full overflow-hidden p-[1px]">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 group-hover:shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]`}
                        style={{ width: '0%', animationDelay: `${index * 0.2}s` }}
                        onAnimationEnd={(e) => {
                          e.target.style.width = skill.level;
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-white/80 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--text-secondary)] group-hover:text-white transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Professional Development */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-white tracking-tight mb-5 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                </svg>
                Professional Development
                <div className="h-0.5 w-20 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] opacity-70 ml-2"></div>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-[var(--bg-dark)]/40 border border-white/5 hover:bg-[var(--bg-card)]/80 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">
                        {cert.logo}
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1 group-hover:text-[var(--primary)] transition-colors">{cert.name}</h4>
                        <p className="text-sm text-[var(--text-secondary)]">{cert.issuer}</p>
                        <p className="text-xs text-[var(--text-secondary)]/70 mt-1">{cert.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
      <section>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight relative overflow-hidden group">
            <span className="relative z-10">Professional Resume</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </h2>
          <div className="h-px flex-grow max-w-[50px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"></div>
        </div>
        <div className="section-divider mb-8"></div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Education Summary */}
          <div className="card p-5 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80 text-center relative overflow-hidden service-card-pulse">
            <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[var(--primary)]/5"></div>
            <div className="relative z-10">
              <svg className="w-10 h-10 mx-auto mb-3 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
              <h3 className="text-sm text-[var(--text-secondary)] mb-1">Education</h3>
              <p className="text-3xl font-bold text-[var(--primary)]">{education.length}</p>
              <p className="text-xs text-[var(--text-secondary)]/70 mt-1">Qualifications</p>
            </div>
          </div>
          
          {/* Experience Summary */}
          <div className="card p-5 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80 text-center relative overflow-hidden service-card-pulse" style={{ animationDelay: '0.1s' }}>
            <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[var(--primary)]/5"></div>
            <div className="relative z-10">
              <svg className="w-10 h-10 mx-auto mb-3 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
              </svg>
              <h3 className="text-sm text-[var(--text-secondary)] mb-1">Experience</h3>
              <p className="text-3xl font-bold text-[var(--primary)]">{experience.length}</p>
              <p className="text-xs text-[var(--text-secondary)]/70 mt-1">Positions</p>
            </div>
          </div>
          
          {/* Skills Summary */}
          <div className="card p-5 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl card-hover bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)]/80 text-center relative overflow-hidden service-card-pulse" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[var(--accent)]/5"></div>
            <div className="relative z-10">
              <svg className="w-10 h-10 mx-auto mb-3 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
              </svg>
              <h3 className="text-sm text-[var(--text-secondary)] mb-1">Skills</h3>
              <p className="text-3xl font-bold text-[var(--accent)]">{skills.length}</p>
              <p className="text-xs text-[var(--text-secondary)]/70 mt-1">Core competencies</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 border-b border-gray-700 pb-2">
            <button 
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-t-lg transition-all duration-300 ${activeTab === 'education' ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-medium' : 'text-[var(--text-secondary)] hover:text-white'}`}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
                Education
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-t-lg transition-all duration-300 ${activeTab === 'experience' ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-medium' : 'text-[var(--text-secondary)] hover:text-white'}`}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                </svg>
                Experience
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 rounded-t-lg transition-all duration-300 ${activeTab === 'skills' ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-medium' : 'text-[var(--text-secondary)] hover:text-white'}`}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
                </svg>
                Skills
              </div>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {renderTabContent()}
        </div>

        {/* Download CV Link */}
        <div className="mt-12 text-center">
          <a
            href="./ManojResume.pdf"
            download="ManojResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-medium shadow-lg shadow-[var(--primary)]/20 hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <svg className="w-6 h-6 relative z-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="relative z-10">Download Full Resume</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resume;
