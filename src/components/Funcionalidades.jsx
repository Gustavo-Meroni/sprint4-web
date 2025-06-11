import React from 'react';
import * as LucideIcons from 'lucide-react';

const Funcionalidades = ({ title, funcionalidades }) => {
  return (
    <section id="funcionalidades" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-12">{title}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {funcionalidades.map((item, index) => {
            const IconComponent =
              LucideIcons[item.icon] || LucideIcons['Activity'];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition shadow-blue-200 flex flex-col items-center"
              >
                <IconComponent className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {item.titulo}
                </h3>
                <p className="text-gray-600">{item.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Funcionalidades;
