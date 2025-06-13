import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import Funcionalidades from '../components/Funcionalidades';
import Impactos from '../components/Impactos';
import Futuro from '../components/Futuro';
import Contato from '../components/Contato';
import Footer from '../components/Footer';
import Main from '../components/Main';

import {
  HeartPulse,
  BellRing,
  Stethoscope,
  ShieldCheck,
  Mail,
  Github,
  ArrowUp,
} from 'lucide-react';

export default function Landing() {
  const headerLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Impactos', href: '#impactos' },
    { name: 'Futuro', href: '#futuro' },
    { name: 'Contato', href: '#contato' },
  ];

  const funcionalidades = [
    {
      titulo: 'Monitoramento em Tempo Real',
      descricao: 'Acompanhe os sinais vitais da criança em tempo real.',
      icone: HeartPulse,
    },
    {
      titulo: 'Alertas Inteligentes',
      descricao: 'Notificações automáticas em casos de anomalia.',
      icone: BellRing,
    },
    {
      titulo: 'Integração com Equipe Médica',
      descricao: 'Acesso rápido aos dados pelos profissionais de saúde.',
      icone: Stethoscope,
    },
    {
      titulo: 'Conforto e Segurança',
      descricao: 'Design ergonômico que garante conforto durante o uso.',
      icone: ShieldCheck,
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
        title="VitalCare"
        links={headerLinks}
        highlightColor="text-blue-600"
      />

      <Main>
        <Hero
          title="Tecnologia que cuida"
          description="Nossa pulseira inteligente monitora crianças hospitalizadas em tempo real, garantindo mais segurança e tranquilidade."
          buttonText="Saiba mais"
          buttonLink="#sobre"
        />

        <Sobre
          title="O que é a Vital Care?"
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
          onSubmit={(data) => console.log('Mensagem enviada:', data)}
        />
      </Main>

      <Footer>
        <div className="w-full flex flex-col items-center justify-center gap-2 py-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Pulseira Inteligente. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:contato@pulseira.com"
              className="hover:text-blue-600 transition-colors"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/seuusuario/pulseira-inteligente"
              target="_blank"
              className="hover:text-blue-600 transition-colors"
            >
              <Github size={18} />
            </a>
            <a href="#inicio" className="hover:text-blue-600 transition-colors">
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </Footer>
    </>
  );
}
