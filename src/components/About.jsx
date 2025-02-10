import React from 'react';

const About = () => {
  const services = [
    {
      icon: '💻',
      title: 'Full Stack Development',
      description: 'Proficient in building end-to-end web applications using Python, JavaScript, HTML, CSS, and various frameworks.'
    },
    {
      icon: '🔧',
      title: 'API Integration',
      description: 'Experience with REST APIs, Gemini API, Ngrok API, and FastAPI for building robust applications.'
    },
    {
      icon: '🛠️',
      title: 'Database Management',
      description: 'Skilled in MySQL database design, management, and optimization for efficient data handling.'
    },
    {
      icon: '🚀',
      title: 'Cloud & DevOps',
      description: 'Basic understanding of Azure Data Fundamentals and experience with Git version control.'
    }
  ];

  const skills = [
    {
      category: "Programming",
      items: ["Python", "JavaScript", "HTML", "CSS", "C"]
    },
    {
      category: "Technologies",
      items: ["Next.js", "MySQL", "REST APIs", "Git", "Azure", "Docker"]
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Communication", "Teamwork", "Time Management"]
    }
  ];

  return (
    <div className="space-y-12">
      {/* About Me Section */}
      <section className="relative">
        <div className="absolute -left-4 top-0 w-1 h-8 bg-[#FFB400]" />
        <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
          About Me
        </h2>
        <div className="text-gray-300 space-y-3 leading-relaxed">
          <p className="bg-[#2A2A2A]/50 p-5 rounded-xl border border-gray-800/50 shadow-lg">
            I enjoy building web applications and exploring AI's potential. My background in Computer Science has given me a solid foundation in software development, and my projects have provided hands-on experience with technologies like Python, JavaScript, and Next.js. I'm looking for an opportunity to contribute to a team and continue learning in a real-world environment.
          </p>
          <p className="bg-[#2A2A2A]/50 p-5 rounded-xl border border-gray-800/50 shadow-lg">
            I'm a quick learner and I'm always looking to improve my skills. I'm a team player and I'm always looking to help my team. I'm a problem solver and I'm always looking to find the best solution. I'm a creative thinker and I'm always looking to find new ideas. I'm a hard worker and I'm always looking to do my best.
          </p>
        </div>
      </section>

      {/* What I'm Doing Section */}
      <section className="relative">
        <div className="absolute -left-4 top-0 w-1 h-8 bg-[#FFB400]" />
        <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
          What I'm Doing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-[#2A2A2A]/50 rounded-xl p-6 border border-gray-800/50 shadow-lg hover:bg-[#2A2A2A]/70 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative">
        <div className="absolute -left-4 top-0 w-1 h-8 bg-[#FFB400]" />
        <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-[#2A2A2A]/50 rounded-xl p-6 border border-gray-800/50 shadow-lg hover:bg-[#2A2A2A]/70 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-[#1E1E1E] rounded-full text-sm text-gray-300 hover:bg-[#FFB400]/10 hover:text-[#FFB400] transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="relative">
        <div className="absolute -left-4 top-0 w-1 h-8 bg-[#FFB400]" />
        <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
          Awards & Certifications
        </h2>
        <div className="space-y-6">
          <div className="group bg-[#2A2A2A]/50 rounded-xl p-6 border border-gray-800/50 shadow-lg hover:bg-[#2A2A2A]/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FFB400] transition-colors">2nd Runner-Up Hackathon</h3>
            <p className="text-gray-300 leading-relaxed">Awarded for the innovative AI-Driven Interview System project, demonstrating expertise in AI and web development.</p>
          </div>
          <div className="group bg-[#2A2A2A]/50 rounded-xl p-6 border border-gray-800/50 shadow-lg hover:bg-[#2A2A2A]/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FFB400] transition-colors">Microsoft Certified: Azure Data Fundamentals (DP-900)</h3>
          </div>
          <div className="group bg-[#2A2A2A]/50 rounded-xl p-6 border border-gray-800/50 shadow-lg hover:bg-[#2A2A2A]/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FFB400] transition-colors">Security Vulnerability Disclosure</h3>
            <p className="text-gray-300 leading-relaxed">Identified an XSS injection vulnerability on a government website and reported it to the concerned officials, receiving acknowledgment for the contribution.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
