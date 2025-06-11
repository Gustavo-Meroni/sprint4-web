import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Impactos = ({ negativos, positivos }) => {
  return (
    <section id="impactos" className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-12">
          Impactos Negativos vs. Positivos
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Impactos Negativos */}
          <div className="bg-red-100 p-6 rounded-2xl shadow-md flex flex-col items-center">
            <AlertCircle size={48} className="text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Impactos Negativos do Problema
            </h3>
            <ul className="text-left list-disc list-inside text-gray-700">
              {negativos.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Impactos Positivos */}
          <div className="bg-green-100 p-6 rounded-2xl shadow-md flex flex-col items-center">
            <CheckCircle2 size={48} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              Impactos Positivos da Solução
            </h3>
            <ul className="text-left list-disc list-inside text-gray-700">
              {positivos.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impactos;
