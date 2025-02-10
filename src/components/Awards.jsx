import React from 'react';

const Awards = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-text-primary">Awards & Certifications</h2>
      <ul className="list-disc list-inside text-text-secondary leading-relaxed">
        <li className="mb-4 bg-secondary p-6 rounded-md shadow-card">
          <span className="font-semibold text-text-primary">2nd Runner-Up, Hackathon</span> - Srinivas Institute of Technology
        </li>
        <li className="mb-4 bg-secondary p-6 rounded-md shadow-card">
          <span className="font-semibold text-text-primary">Microsoft Certified: Azure Data Fundamentals (DP-900)</span>
        </li>
        <li className="mb-4 bg-secondary p-6 rounded-md shadow-card">
          <span className="font-semibold text-text-primary">Security Vulnerability Disclosure</span> - Identified an XSS injection vulnerability on a government website.
        </li>
      </ul>
    </div>
  )
}

export default Awards;
