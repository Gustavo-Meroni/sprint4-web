import React from "react";

const Futuro = ({ titulo, descricao, imagemUrl, altText }) => {
  return (
    <section id="futuro" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">{titulo}</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">{descricao}</p>
        <div className="flex justify-center">
          <img
            src={imagemUrl}
            alt={altText}
            className="rounded-2xl shadow-md w-full max-w-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Futuro;
