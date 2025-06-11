import React from "react";

const Hero = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section id="inicio" className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-4xl font-bold text-blue-700 mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          {description}
        </p>
        <a
          href={buttonLink}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
