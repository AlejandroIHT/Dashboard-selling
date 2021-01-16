import React from 'react';
import '../styles/components/ButtonDelete.css';

const ButtonDelete = ({ children, color }) => (
  <button className={`ButtonDelete ${color}`} type="button">
    {children}
  </button>
);

export default ButtonDelete;
