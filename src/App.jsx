import React, { useState, useEffect } from 'react';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Funcionalidades from './components/Funcionalidades';
import Futuro from './components/Futuro';
import Header from './components/Header';
import Hero from './components/Hero';
import Impactos from './components/Impactos';
import Sobre from './components/Sobre';
import Main from './components/Main';

const funcionalidades = [
  {
    titulo: 'Frequência Cardíaca',
    descricao:
      'Monitoramento em tempo real da frequência cardíaca para detecção rápida de irregularidades.',
  },
  {
    titulo: 'Temperatura Corporal',
    descricao:
      'Controle contínuo para garantir estabilidade térmica e alertar sobre febres.',
  },
  {
    titulo: 'Níveis de Oxigênio',
    descricao:
      'Monitoramento dos níveis de oxigênio no sangue com alertas automáticos.',
  },
  {
    titulo: 'Hidratação',
    descricao:
      'Sensor de hidratação para evitar complicações associadas à desidratação.',
  },
];

const negativos = [
  'Ansiedade e preocupação constante dos pais.',
  'Risco de agravamento da condição sem alerta imediato.',
  'Sobrecarga de trabalho para os profissionais de saúde.',
];

const positivos = [
  'Monitoramento contínuo e redução da ansiedade.',
  'Detecção precoce de complicações e respostas rápidas.',
  'Alívio na sobrecarga dos profissionais de saúde com alertas automáticos.',
];

const App = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData
      ? JSON.parse(savedData)
      : { nome: '', email: '', mensagem: '' };
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const headerLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Impactos', href: '#impactos' },
    { name: 'Futuro', href: '#futuro' },
    { name: 'Contato', href: '#contato' },
  ];

  const formLabels = { nome: 'Nome', email: 'E-mail', mensagem: 'Mensagem' };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        title="Pulseira Inteligente"
        links={headerLinks}
        highlightColor="text-gray-900"
      />
      <div className="pt-20">
        <Hero
          id="inicio"
          title="Cuidado Inteligente para Crianças Hospitalizadas"
          description="Monitoramento contínuo e não invasivo para garantir segurança e tranquilidade."
          buttonText="Saiba Mais"
          buttonLink="#sobre"
        />
        <Sobre
          id="sobre"
          title="Sobre a Solução"
          description="Nossa pulseira inteligente oferece monitoramento contínuo de sinais vitais como frequência cardíaca, temperatura, hidratação e muito mais, projetada especialmente para o conforto e segurança de crianças hospitalizadas."
        />
        <Funcionalidades
          id="funcionalidades"
          title="Funcionalidades"
          funcionalidades={funcionalidades}
        />
        <Impactos id="impactos" negativos={negativos} positivos={positivos} />
        <Futuro
          id="futuro"
          titulo="Visão para o Futuro"
          descricao="Nosso objetivo é expandir a utilização da pulseira inteligente para hospitais em todo o país, melhorando ainda mais a segurança e o cuidado infantil."
        />
        <Contato
          id="contato"
          title="Entre em Contato"
          formLabels={formLabels}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Main />
        <Footer
          texto="2025 - Todos os direitos reservados"
          linkText="Saiba mais"
          linkUrl="https://exemplo.com/termos"
        />
      </div>
    </div>
  );
};

export default App;
