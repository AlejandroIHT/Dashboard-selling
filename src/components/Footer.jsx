import React from 'react';
import '../styles/components/Footer.css';

const Footer = ({ lenguage }) => {
  return (
    <footer className="Footer">
      <p className="Footer__title">
        {lenguage === 'en' && 'Create with'}
        {lenguage === 'es' && 'Creado con'} <i className="fas fa-heart" />{' '}
        {lenguage === 'en' && 'by'}
        {lenguage === 'es' && 'por'}{' '}
        <a
          href="https://www.linkedin.com/in/alejandroherrerat/"
          target="_blank"
          rel="noreferrer"
          className="Footer__title__link"
        >
          Alejandro Herrera Turra
        </a>
      </p>
    </footer>
  );
};

export default Footer;
