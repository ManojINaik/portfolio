import React from 'react';

const Resume = () => {
  const education = [
    {
      institution: 'Srinivas Institute of Technology, Mangalore',
      degree: 'Bachelor of Engineering, Computer Science',
      year: '2021-25',
      details: 'CGPA: 6.0'
    },
    {
      institution: 'Govt PU College, Byndoor',
      degree: 'PUC, Computer Science',
      year: '2019-21',
      details: 'Secured 1st class'
    },
    {
      institution: 'RNS Vidyanikethan',
      degree: 'SSLC',
      year: '2018-19',
      details: 'Secured 1st class'
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
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Education Section */}
      <section className="relative">
        <div className="absolute -left-4 top-0 w-1 h-8 bg-[#FFB400]" />
        <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="bg-[#2A2A2A]/50 p-5 rounded-xl border border-gray-800/50 shadow-lg hover:bg-[#2A2A2A]/70 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                <span className="text-[#FFB400] text-sm px-3 py-1 bg-[#FFB400]/10 rounded-full">
                  {edu.year}
                </span>
              </div>
              <p className="text-gray-300 mb-2">{edu.degree}</p>
              <p className="text-sm text-gray-400">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative">
        <div className="absolute -left-4 top-0 w-1 h-8 bg-[#FFB400]" />
        <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
          Experience
        </h2>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div key={index} className="bg-[#2A2A2A]/50 p-5 rounded-xl border border-gray-800/50 shadow-lg hover:bg-[#2A2A2A]/70 transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                  <p className="text-[#FFB400]">{exp.company}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-400">{exp.location}</span>
                  <p className="text-sm text-[#FFB400] mt-1">{exp.duration}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-gray-300 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#FFB400]/30 before:rounded-full">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
