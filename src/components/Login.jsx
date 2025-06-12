import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      setError('Preencha todos os campos.');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('E-mail inválido.');
      return;
    }

    setError('');

    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
      >
        <div className="flex items-center mb-4">
          <Link
            to="/"
            className="text-purple-600 hover:text-purple-800 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Voltar
          </Link>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
          Login
        </h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <label className="block mb-2 font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="seu@email.com"
        />
        <label className="block mb-2 font-semibold" htmlFor="senha">
          Senha
        </label>
        <input
          id="senha"
          name="senha"
          type="password"
          value={formData.senha}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-6"
          placeholder="********"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
