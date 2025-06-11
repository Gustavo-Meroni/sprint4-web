import React from 'react';

const Header = ({ title, links, highlightColor }) => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex items-center gap-2 ">
        <h1 className="text-3xl font-bold text-blue-700">{title}</h1>
        <nav className="ml-auto">
          <ul className="flex space-x-6 font-semibold">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-lg ${highlightColor} hover:text-blue-700`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
