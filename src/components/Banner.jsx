import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    image: '/img/joy4.jpg',
    text: 'Every moment with you, Joy Chioma, is poetry in motion. 💖',
  },
  {
    id: 2,
    image: '/img/joy5.jpg',
    text: 'Your smile lights up my day like Lagos sunrise. ☀️',
  },
  {
    id: 3,
    image: '/img/joy1.jpg',
    text: 'Brown skin, bold heart — you’re beauty and grace combined. 🌹',
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10 overflow-hidden rounded-2xl shadow-xl h-[600px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center py-6 px-8 text-xl font-semibold">
            {slide.text}
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white text-red-500 hover:bg-red-200 rounded-full p-3 shadow-lg transition"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white text-red-500 hover:bg-red-200 rounded-full p-3 shadow-lg transition"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full ${
              idx === current ? 'bg-red-500' : 'bg-white'
            } transition`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
