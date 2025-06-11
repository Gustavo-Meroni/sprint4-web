import React from 'react';
import { Github, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-blue-100 p-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Seu Projeto - Todos os direitos
          reservados.
        </p>
        <div className="flex space-x-6 text-blue-300">
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="tel:+5511999999999"
            aria-label="Telefone"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <Phone size={24} />
          </a>
          <a
            href="mailto:contato@seuprojeto.com"
            aria-label="Email"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
