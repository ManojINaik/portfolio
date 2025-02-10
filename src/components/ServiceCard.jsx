import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;
