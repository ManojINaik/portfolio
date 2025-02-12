import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Farmers Gateway",
      description: "A comprehensive agriculture platform with ML-based predictions and direct crop sales. Features include crop/fertilizer recommendations, plant disease detection using AI, weather forecasts, integrated chatbot using GPT-3.5, and secure payment processing with Stripe API.",
      technologies: ["Python", "PHP", "Machine Learning", "OpenAI API", "Stripe API", "MySQL", "Bootstrap"],
      image: "/assets/farmers-gateway.jpg",
      links: {
        github: "https://github.com/ManojINaik/Farmers-Gateway",
        live: null
      }
    },
    {
      title: "AI-Driven Interview System",
      description: "An innovative interview platform using Next.js and Gemini API for AI-based question generation and evaluation. Features include user authentication with Clerk, real-time video interviews, face detection, and comprehensive analytics. Won 2nd runner-up in hackathon.",
      technologies: ["Next.js", "Gemini API", "Clerk Auth", "Face Detection", "Tailwind CSS", "Prisma"],
      image: "/assets/interview-system.jpg",
      links: {
        github: "https://github.com/ManojINaik/ai-interview-system",
        live: null
      }
    },
    {
      title: "AI Learning Platform",
      description: "A comprehensive learning platform integrating AI for personalized education. Features include skill assessments, learning path generation, knowledge testing, and admin analytics. Built with React, TypeScript, and OpenAI integration.",
      technologies: ["React", "TypeScript", "OpenAI API", "Firebase", "Tailwind CSS"],
      image: "/assets/ai-learning.jpg",
      links: {
        github: "https://github.com/ManojINaik/Ai-learning",
        live: "https://learningai.vercel.app/"
      }
    },
    {
      title: "IP Capture Tool",
      description: "A web application for IP address tracking and geolocation. Features include domain resolution, private/public IP detection, interactive mapping, and social sharing capabilities. Built with vanilla JavaScript and integrates multiple APIs.",
      technologies: ["JavaScript", "HTML/CSS", "Leaflet.js", "IPIFY API", "OpenStreetMap"],
      image: "/assets/ip-capture.jpg",
      links: {
        github: "https://github.com/ManojINaik/ip-capture",
        live: "https://manojinaik.github.io/IPCAPTURE/"
      }
    }
  ];

  return (
    <div className="space-y-12">
      <section className="relative">
        <div className="absolute -left-4 top-0 w-1 h-8 bg-[#FFB400]" />
        <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-[#2A2A2A]/50 rounded-xl border border-gray-800/50 shadow-lg overflow-hidden hover:bg-[#2A2A2A]/70 transition-all duration-300"
            >
              <div className="aspect-video bg-gray-900/50 relative">
                {/* Project thumbnail/preview */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFB400] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-[#1E1E1E]/80 rounded-full text-sm text-gray-300 hover:bg-[#FFB400]/10 hover:text-[#FFB400] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1E1E1E] rounded-lg text-gray-300 hover:bg-[#FFB400]/10 hover:text-[#FFB400] transition-all duration-300 border border-gray-800/50"
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
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FFB400] text-black rounded-lg hover:bg-[#FFB400]/90 transition-all duration-300 font-medium"
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
