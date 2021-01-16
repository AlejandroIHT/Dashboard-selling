import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <p className="Footer__title">
        Create with <i className="fas fa-heart" /> by {" "}
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
