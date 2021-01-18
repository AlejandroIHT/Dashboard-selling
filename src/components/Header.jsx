import React from 'react';
import '../styles/components/Header.css';

const Header = ({ lenguage, handleClick }) => {
  return (
    <header className="Header">
      <h1 className="Header__title reset-margin">
        {lenguage === 'es' && 'Tablero'}
        {lenguage === 'en' && 'Dashboard'}
      </h1>
      <div className="Header__Buttons">
        <p className="Header__Buttons__title reset-margin">
          {lenguage === 'es' && 'Idioma: '}
          {lenguage === 'en' && 'Language: '}
        </p>
        <div className="Header__Buttons__container">
          <button
            onClick={handleClick}
            name="es"
            className={
              lenguage === 'es'
                ? 'Header__Buttons__containe--ES active'
                : 'Header__Buttons__containe--ES'
            }
          >
            ES
          </button>
          <button
            onClick={handleClick}
            name="en"
            className={
              lenguage === 'en'
                ? 'Header__Buttons__containe--EN active'
                : 'Header__Buttons__containe--EN'
            }
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
