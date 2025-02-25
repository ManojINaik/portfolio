import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});

  // Image loading handler
  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  // Image error handler
  const handleImageError = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: 'error' }));
  };

  // Enhanced project data with more structured information
  const projects = [
    {
      title: "Farmers Gateway",
      description: "A comprehensive agriculture platform with ML-based predictions and direct crop sales. Features include crop/fertilizer recommendations, plant disease detection using AI, weather forecasts, integrated chatbot using GPT-3.5, and secure payment processing with Stripe API.",
      technologies: ["Python", "PHP", "Machine Learning", "OpenAI API", "Stripe API", "MySQL", "Bootstrap"],
      image: "./assets/farmers-gateway.jpg",
      links: {
        github: "https://github.com/ManojINaik/Farmers-Gateway",
        live: null
      },
      highlights: [
        "Implemented ML algorithms for crop recommendation",
        "Integrated OpenAI GPT-3.5 for intelligent customer support",
        "Built secure payment processing with Stripe API"
      ]
    },
    {
      title: "AI-Driven Interview System",
      description: "An innovative interview platform using Next.js and Gemini API for AI-based question generation and evaluation. Features include user authentication with Clerk, real-time video interviews, face detection, and comprehensive analytics. Won 2nd runner-up in hackathon.",
      technologies: ["Next.js", "Gemini API", "Clerk Auth", "Face Detection", "Tailwind CSS", "Prisma"],
      image: "./assets/interview-system.jpg",
      links: {
        github: "https://github.com/ManojINaik/ai-interview-system",
        live: null
      },
      highlights: [
        "Developed an AI-powered question generator using Gemini API",
        "Implemented real-time video interviews with face detection",
        "Built comprehensive analytics dashboard for interview performance"
      ]
    },
    {
      title: "AI Learning Platform",
      description: "A comprehensive learning platform integrating AI for personalized education. Features include skill assessments, learning path generation, knowledge testing, and admin analytics. Built with React, TypeScript, and OpenAI integration.",
      technologies: ["React", "TypeScript", "OpenAI API", "Firebase", "Tailwind CSS"],
      image: "./assets/ai-learning.png",
      links: {
        github: "https://github.com/ManojINaik/Ai-learning",
        live: "https://learningai.vercel.app/"
      },
      highlights: [
        "Created personalized learning paths with OpenAI integration",
        "Designed interactive knowledge testing components",
        "Built real-time progress tracking and analytics"
      ]
    },
    {
      title: "IP Capture Tool",
      description: "A web application for IP address tracking and geolocation. Features include domain resolution, private/public IP detection, interactive mapping, and social sharing capabilities. Built with vanilla JavaScript and integrates multiple APIs.",
      technologies: ["JavaScript", "HTML/CSS", "Leaflet.js", "IPIFY API", "OpenStreetMap"],
      image: "./assets/ip-capture.png",
      links: {
        github: "https://github.com/ManojINaik/ip-capture",
        live: "https://manojinaik.github.io/IPCAPTURE/"
      },
      highlights: [
        "Implemented domain resolution and IP detection algorithms",
        "Integrated interactive mapping with Leaflet.js",
        "Created seamless API integrations for geolocation data"
      ]
    }
  ];

  // Simulate loading state and animate projects
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      projects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects(prev => [...prev, index]);
        }, index * 200);
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Extract all unique technologies
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

  // Filter projects by selected technology
  const filteredProjects = selectedTech 
    ? projects.filter(project => project.technologies.includes(selectedTech))
    : projects;

  // Function to get icon for project based on technologies
  const getProjectIcon = (technologies) => {
    if (technologies.includes("Python")) {
      return "./assets/python.png";
    } else if (technologies.includes("JavaScript")) {
      return "./assets/javascript.png";
    } else if (technologies.includes("Next.js")) {
      return "./assets/next-js.png";
    } else if (technologies.includes("HTML/CSS")) {
      return "./assets/HTMLCSS.png";
    } else {
      return "./assets/images.png";
    }
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      <section>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight group">
              <span className="relative inline-block">
                Featured Projects
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] mt-2">Showcasing my latest work and technical expertise</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="relative inline-block">
              <select 
                className="px-4 py-2 bg-[var(--bg-card)] text-[var(--text-primary)] rounded-lg border border-white/10 appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all duration-300"
                value={selectedTech || ""}
                onChange={(e) => setSelectedTech(e.target.value || null)}
              >
                <option value="">All Technologies</option>
                {allTechnologies.map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--text-secondary)]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-divider mb-8"></div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="card p-0 rounded-xl border border-white/5 shadow-lg overflow-hidden">
                <div className="aspect-video bg-[var(--bg-dark)]/50 animate-pulse-slow"></div>
                <div className="p-6 space-y-4">
                  <div className="h-8 bg-[var(--bg-dark)]/50 rounded animate-pulse-slow w-3/4"></div>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map(j => (
                      <div key={j} className="h-6 bg-[var(--bg-dark)]/50 rounded animate-pulse-slow w-16"></div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-[var(--bg-dark)]/50 rounded animate-pulse-slow"></div>
                    <div className="h-4 bg-[var(--bg-dark)]/50 rounded animate-pulse-slow"></div>
                    <div className="h-4 bg-[var(--bg-dark)]/50 rounded animate-pulse-slow w-3/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                id={`project-${index}`} 
                className={`card p-0 rounded-xl border border-white/5 shadow-lg transition-all duration-500 hover:shadow-xl overflow-hidden card-shine ${visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="aspect-video bg-[var(--bg-dark)]/50 relative overflow-hidden">
                  {/* Project thumbnail/preview */}
                  {loadedImages[index] === 'error' ? (
                    <div className="w-full h-full flex items-center justify-center bg-[var(--bg-dark)]/70">
                      <div className="text-center p-6">
                        <img 
                          src={getProjectIcon(project.technologies)} 
                          alt={project.title} 
                          className="w-16 h-16 mx-auto mb-4 opacity-70"
                        />
                        <h4 className="text-xl font-medium text-[var(--text-primary)]">{project.title}</h4>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-in-out ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageError(index)}
                      style={{ transition: 'opacity 0.5s ease-in-out' }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className={`skill-tag cursor-pointer ${selectedTech === tech ? 'bg-[var(--primary)]/20 text-[var(--primary)]' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTech(tech === selectedTech ? null : tech);
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6 bg-[var(--bg-dark)]/30 p-4 rounded-lg border border-white/5">
                    <h4 className="text-[var(--text-primary)] text-sm font-semibold mb-2">KEY HIGHLIGHTS</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-[var(--text-secondary)]">
                          <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--bg-dark)]/50 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-dark)] hover:text-[var(--primary)] transition-all duration-300 border border-white/5"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-lg transform hover:translate-y-[-2px] transition-transform duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {filteredProjects.length === 0 && !isLoading && (
          <div className="text-center py-20">
            <svg className="w-16 h-16 mx-auto text-[var(--text-secondary)]/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 21a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2">No projects found</h3>
            <p className="text-[var(--text-secondary)]">No projects match the selected technology filter.</p>
            <button 
              onClick={() => setSelectedTech(null)}
              className="mt-4 px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg hover:bg-[var(--primary)]/20 transition-colors duration-300"
            >
              Clear Filter
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
