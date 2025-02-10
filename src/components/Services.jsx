import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">What I'm Doing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ServiceCard
          title="Mobile Apps"
          description="Professional development of applications for Android and iOS."
        />
        <ServiceCard
          title="Web Development"
          description="High-quality development of sites at the professional level."
        />
        <ServiceCard
          title="UI/UX Design"
          description="The most modern and high-quality design made at a professional level."
        />
        <ServiceCard
          title="Backend Development"
          description="High-performance backend services designed for scalability and seamless user experience."
        />
      </div>
    </div>
  );
};

export default Services;
