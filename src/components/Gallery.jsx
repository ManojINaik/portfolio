import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: 'error' }));
  };

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
                ? 'bg-[#FFB400] text-black shadow-lg shadow-[#FFB400]/20'
                : 'bg-[#2A2A2A] text-gray-400 hover:bg-[#FFB400]/10 hover:text-[#FFB400] hover:shadow-lg hover:shadow-[#FFB400]/10'
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
                  ? 'bg-[#FFB400] text-black shadow-lg shadow-[#FFB400]/20'
                  : 'bg-[#2A2A2A] text-gray-400 hover:bg-[#FFB400]/10 hover:text-[#FFB400] hover:shadow-lg hover:shadow-[#FFB400]/10'
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
              className="group relative bg-[#2A2A2A] rounded-xl overflow-hidden cursor-pointer hover:transform hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-xl"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square bg-[#1E1E1E] relative overflow-hidden">
                {!loadedImages[image.id] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-[#FFB400] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                {loadedImages[image.id] === 'error' ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Failed to load image</p>
                  </div>
                ) : (
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      loadedImages[image.id] 
                        ? 'opacity-100 scale-100 group-hover:scale-110' 
                        : 'opacity-0 scale-105'
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => handleImageError(image.id)}
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-semibold mb-2 text-lg">{image.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full transform scale-95 opacity-0 animate-[scaleIn_0.3s_ease-out_forwards]" 
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 rounded-b-lg">
                <h3 className="text-white text-2xl font-semibold mb-3">{selectedImage.title}</h3>
                <p className="text-gray-300 text-base">{selectedImage.description}</p>
              </div>
              <button
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes scaleIn {
            from {
              transform: scale(0.95);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Gallery; 