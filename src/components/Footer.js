import React, { useState, useEffect } from 'react';
import './Footer.css';
import colors from '../colors';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true); // Da li footer treba biti vidljiv
  const [isFixed, setIsFixed] = useState(false); // Da li footer treba biti fiksiran

  const checkScrollPosition = () => {
    // Proveravamo da li stranica ima dovoljno sadržaja za skrolovanje
    if (document.documentElement.scrollHeight > window.innerHeight) {
      // Ako ima sadržaja za skrolovanje, proveravamo da li je korisnik skrolovao do kraja
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        setIsVisible(true); // Footer je vidljiv kad korisnik skroluje do kraja
      } else {
        setIsVisible(false); // Footer je skriven dok se ne skroluje do kraja
      }
      setIsFixed(true); // Footer postaje fiksiran na dnu
    } else {
      // Ako nema skrolovanja, footer treba da bude na dnu stranice
      setIsFixed(false);
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition(); // Pozivamo odmah kako bismo proverili prvu visinu stranice

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []); // Ovaj useEffect se pokreće samo jednom prilikom učitavanja komponente

  return (
    <footer
      style={{ backgroundColor: colors.background }}
      className={`${isVisible ? 'visible' : ''} ${isFixed ? 'fixed' : ''}`}
    >
      <p>&copy; {new Date().getFullYear()} Minimal. Sva prava zadržana.</p>
    </footer>
  );
};

export default Footer;
