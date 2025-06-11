import React, { useState } from 'react';

const Contato = ({ title, formLabels, onSubmit }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    setError('');

    if (onSubmit) {
      onSubmit(formData);
    }

    localStorage.setItem('contato', JSON.stringify(formData));
    alert('Mensagem enviada com sucesso!');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <section id="contato" className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
          {title}
        </h2>
        {error && (
          <p className="text-red-600 text-center mb-4 font-semibold">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="nome"
              className="block font-semibold text-blue-900 mb-2"
            >
              {formLabels.nome}
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
              className="w-full border border-blue-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-blue-900 mb-2"
            >
              {formLabels.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              className="w-full border border-blue-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mensagem"
              className="block font-semibold text-blue-900 mb-2"
            >
              {formLabels.mensagem}
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Escreva sua mensagem"
              rows="5"
              className="w-full border border-blue-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={!formData.nome || !formData.email || !formData.mensagem}
            className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
              !formData.nome || !formData.email || !formData.mensagem
                ? 'bg-blue-200 text-blue-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
