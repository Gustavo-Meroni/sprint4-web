import React from 'react';

const Footer = ({ texto, linkText, linkUrl }) => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <p>{texto}</p>
      <a href={linkUrl} className="text-yellow-300 hover:underline">
        {linkText}
      </a>
    </footer>
  );
};

export default Footer;
