import React from 'react';
import { Container } from '@material-ui/core';

import Home from '../../routes/home';
import Footer from './footer';

import './app.css';

const App: React.FC = () => {
  return (
    <Container>
      <Home />
      <Footer />
    </Container>
  );
};

export default App;
