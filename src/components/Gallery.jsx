import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: import.meta.env.BASE_URL + "gallery/image1.jpg",
      title: "Team Collaboration",
      category: "Hackthon",
      description: "Devathon 2nd-runner up"
    },
    {
      id: 2,
      src: import.meta.env.BASE_URL + "gallery/image2.jpg",
      title: "Professional Headshot",
      category: "Portrait",
      description: "Professional headshot "
    },
    {
      id: 3,
      src: import.meta.env.BASE_URL + "gallery/image3.jpg",
      title: "Speaking Event",
      category: "Events",
      description: "Technical presentation at college symposium"
    },
    // Add more images as needed
  ];

  const categories = [...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="space-y-12">
      <section className="relative">
        <div className="absolute -left-4 top-0 w-1 h-8 bg-[#FFB400]" />
        <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
          Gallery
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeCategory === 'All'
                ? 'bg-[#FFB400] text-black'
                : 'bg-[#2A2A2A] text-gray-400 hover:bg-[#FFB400]/10 hover:text-[#FFB400]'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#FFB400] text-black'
                  : 'bg-[#2A2A2A] text-gray-400 hover:bg-[#FFB400]/10 hover:text-[#FFB400]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-[#2A2A2A] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
              <button
                className="absolute top-4 right-4 text-white/80 hover:text-white"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery; 