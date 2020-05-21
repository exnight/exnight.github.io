import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';

import Navigation from './navigation';
import Footer from './footer';

import Home from '../../routes/home';
import About from '../../routes/about';

import './app.css';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />

      <Navigation />
      <Container>
        <Router>
          <RouterPage path="/" pageComponent={<Home />} />
          <RouterPage path="about" pageComponent={<About />} />
        </Router>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default App;
