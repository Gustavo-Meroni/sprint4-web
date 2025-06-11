import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Funcionalidades from './components/Funcionalidades';
import Impactos from './components/Impactos';
import Futuro from './components/Futuro';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Impactos', href: '#impactos' },
    { name: 'Futuro', href: '#futuro' },
    { name: 'Contato', href: '#contato' },
  ];

  const funcionalidades = [
    {
      titulo: 'Monitoramento em tempo real',
      descricao: 'Acompanhe os dados das pulseiras a qualquer momento.',
      icon: 'Monitor', // ícone de monitor/desktop
    },
    {
      titulo: 'Alertas imediatos',
      descricao:
        'Receba notificações instantâneas sobre qualquer evento crítico.',
      icon: 'BellRing', // ícone de sino com alerta
    },
    {
      titulo: 'Controle remoto',
      descricao: 'Ajuste configurações remotamente via aplicativo.',
      icon: 'RemoteControl', // ícone de controle remoto
    },
    {
      titulo: 'Análise de dados',
      descricao: 'Relatórios detalhados para melhorar o atendimento.',
      icon: 'PieChart', // gráfico de pizza
    },
  ];

  const impactosNegativos = [
    'Falta de monitoramento constante',
    'Risco de emergências não detectadas',
    'Desconforto emocional para a família',
  ];

  const impactosPositivos = [
    'Maior segurança para pacientes',
    'Tranquilidade para pais e cuidadores',
    'Agilidade na resposta médica',
  ];

  return (
    <>
      <Header
        title="Pulseira Inteligente"
        links={navLinks}
        highlightColor="text-blue-600"
      />

      <Main>
        <Hero
          title="Tecnologia que cuida"
          description="Nossa pulseira inteligente monitora crianças hospitalizadas em tempo real, garantindo mais segurança e tranquilidade."
          buttonText="Saiba Mais"
          buttonLink="#sobre"
        />

        <Sobre
          title="O que é a Pulseira Inteligente?"
          description="É um dispositivo vestível projetado para monitorar os sinais vitais de crianças hospitalizadas, alertando a equipe médica em casos de emergência."
          imageUrl="/imagens/pulseira.jpg"
          altText="Imagem da pulseira inteligente"
        />

        <Funcionalidades
          title="Principais Funcionalidades"
          funcionalidades={funcionalidades}
        />

        <Impactos negativos={impactosNegativos} positivos={impactosPositivos} />

        <Futuro
          titulo="Visão de Futuro"
          descricao="Pretendemos expandir o uso da pulseira para ambientes escolares e domésticos, integrando com assistentes de voz e IA preditiva."
          imagemUrl="/imagens/futuro.jpg"
          altText="Imagem ilustrando o futuro da tecnologia"
        />

        <Contato
          title="Entre em Contato"
          formLabels={{
            nome: 'Seu nome',
            email: 'Seu e-mail',
            mensagem: 'Sua mensagem',
          }}
          onSubmit={(data) => console.log('Formulário enviado:', data)}
        />
      </Main>

      <Footer
        texto="© 2025 Pulseira Inteligente. Todos os direitos reservados."
        linkText="Ver no GitHub"
        linkUrl="https://github.com/seuusuario/pulseira-inteligente"
      />
    </>
  );
}

export default App;
