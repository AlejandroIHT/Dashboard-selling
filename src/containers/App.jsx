import React, { Suspense, lazy } from 'react';
import Layout from '../components/Layout';
import Home from './Home';

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
