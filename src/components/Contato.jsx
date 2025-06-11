import React, { useState } from "react";

const Contato = ({ title, formLabels, onSubmit }) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    setError("");

    if (onSubmit) {
      onSubmit(formData);
    }

    localStorage.setItem("contato", JSON.stringify(formData));
    alert("Mensagem enviada com sucesso!");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section id="contato" className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
          {title}
        </h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block font-medium text-gray-700">
              {formLabels.nome}
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              {formLabels.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="mensagem" className="block font-medium text-gray-700">
              {formLabels.mensagem}
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Escreva sua mensagem"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            ></textarea>
          </div>
          <button
           type="submit"
           disabled={!formData.nome || !formData.email || !formData.mensagem}
           className={`
             ${!formData.nome || !formData.email || !formData.mensagem
               ? 'bg-white text-gray-500 cursor-not-allowed'
               : 'bg-[#646cff] text-white hover:bg-[#535bf2]'
             }
             font-semibold py-2 px-6 rounded-lg
             transition-colors duration-300
           `}
         >
           Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
