import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ title, links, highlightColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
        <h1 className="text-2xl xl:text-3xl font-bold text-blue-700 truncate">
          {title}
        </h1>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`
            flex flex-col lg:flex-row lg:items-center
            absolute lg:static
            top-full right-4 lg:right-0
            w-48 lg:w-auto
            bg-blue-50 lg:bg-transparent
            text-center lg:text-left
            z-50
            shadow-lg lg:shadow-none
            gap-2 lg:gap-6
            rounded-b-md
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${
              isOpen
                ? 'max-h-80 opacity-100'
                : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100'
            }
          `}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-sm lg:text-base ${highlightColor} hover:text-blue-800 font-medium transition`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/login"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 text-sm lg:text-base ${highlightColor} hover:text-blue-800 font-semibold transition`}
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
