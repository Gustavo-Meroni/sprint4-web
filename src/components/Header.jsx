import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ title, links, highlightColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between max-w-full">
        {/* Título à esquerda */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
          {title}
        </h1>

        {/* Botão hambúrguer - só aparece em telas pequenas */}
        <button
          className="sm:hidden flex items-center p-2 text-blue-700 border-blue-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegação */}
        <nav
          className={`
    ${isOpen ? 'block' : 'hidden'}
    absolute top-full left-0 w-full bg-white shadow-md sm:shadow-none sm:static sm:block sm:w-auto
  `}
        >
          <ul
            className="
    flex flex-col sm:flex-row sm:items-center
    space-y-1 sm:space-y-0 sm:space-x-2 md:space-x-4 lg:space-x-6
    font-semibold
  "
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="border-b border-gray-200 sm:border-none"
              >
                <a
                  href={link.href}
                  className={`
            block px-3 py-1 text-sm sm:text-base md:text-sm lg:text-base
            ${highlightColor} hover:text-blue-800
          `}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li className="border-b border-gray-200 sm:border-none">
              <a
                href="/login"
                className={`
          block px-3 py-1 text-sm sm:text-base md:text-sm lg:text-base
          ${highlightColor} hover:text-blue-800 font-semibold
        `}
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
