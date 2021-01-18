import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, lenguage, handleClickLenguage }) => {
  return (
    <>
      <Header lenguage={lenguage} handleClick={handleClickLenguage} />
      {children}
      <Footer lenguage={lenguage} />
    </>
  );
};

export default Layout;
