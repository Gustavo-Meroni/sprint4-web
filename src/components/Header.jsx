import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ title, links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-cyan-600">{title}</h1>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-800 hover:text-cyan-800 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-cyan-800 font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
