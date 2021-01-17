import React from 'react';
import '../styles/components/ButtonDelete.css';

const ButtonDelete = ({ children, color, handleClick, title }) => (
  <button onClick={handleClick} title={title} className={`ButtonDelete ${color}`} type="button">
    {children}
  </button>
);

export default ButtonDelete;
