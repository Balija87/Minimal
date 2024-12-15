import React, { useState } from 'react';
import './Header.css'; // Uvezi CSS fajl
import colors from '../colors';

const Header = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" style={{ backgroundColor: colors.background }}>
      <div className="flex items-center justify-center h-16 w-16 relative logo-container">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-full logo"
          style={{
            backgroundImage: "url('/logo.png')",
            backgroundSize: 'cover', // Osigurava da se slika vidi u celosti
            backgroundRepeat: 'no-repeat', // Sprečava ponavljanje slike
            width: '100%', // Podesite širinu na 100%
            height: '100%', // Podesite visinu na 100%
          }}
        ></div>
      </div>

      <div
        style={{ color: colors.backgroundText, padding: 5 }}
        className="logo"
      >
        meenar
      </div>

      <nav className="navbar">
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/komentari">CommentBox</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
          <li>
            <a href="/info">Info</a>
          </li>
          <li>
            <a href="#istorija">Istorija</a>
          </li>
        </ul>
        <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
