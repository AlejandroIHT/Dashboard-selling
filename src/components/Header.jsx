import React from 'react';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header__title reset-margin">Dashboard</h1>
      <div className="Header__Buttons">
        <p className="Header__Buttons__title reset-margin">Idioma: </p>
        <div className="Header__Buttons__container">
          <button className="Header__Buttons__containe--ES active">ES</button>
          <button className="Header__Buttons__containe--EN">EN</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
