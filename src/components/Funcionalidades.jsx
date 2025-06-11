import React from "react";

const Funcionalidades = ({ title, funcionalidades }) => {
  return (
    <section id="funcionalidades" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-12">{title}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {funcionalidades.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.titulo}</h3>
              <p className="text-gray-700">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Funcionalidades;
