import React from 'react';

const images = [
  '/img/joy1.jpg',
  '/img/joy 2.jpg',
  '/img/joy3.jpg',
  '/img/joy4.jpg',
  '/img/joy5.jpg',
  '/img/joy6.jpg',
  '/img/joy7.jpg',
  '/img/joy8.jpg',
  '/img/joy9.jpg',
  '/img/joy10.jpg',
  // Add more image paths as needed
];

const Gallery = () => {
  return (
    <div id="gallery" className="bg-gradient-to-b from-pink-50 to-red-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-10 drop-shadow-md">Memory Lane Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={src}
              alt={`Memory ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition">❤️ Joy Moment</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
