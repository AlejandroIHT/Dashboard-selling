import React, { useState } from 'react';
import Layout from '../components/Layout';
import Home from './Home';

const App = () => {
  /** Type lenguage */
  const [lenguage, setLenguage] = useState('es');
  /** Change type lenguage */
  const handleClickLenguage = (e) => {
    setLenguage(e.target.name);
  };

  return (
    <Layout handleClickLenguage={handleClickLenguage} lenguage={lenguage}>
      <Home lenguage={lenguage} />
    </Layout>
  );
};

export default App;
