import React from 'react';

const Hero = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-r from-cyan-50 to-blue-50 mt-16 py-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 leading-tight mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">{description}</p>
        <a
          href={buttonLink}
          className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
