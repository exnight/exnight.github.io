import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { common, blueGrey, lightBlue } from '@material-ui/core/colors';

import Navigation from './navigation';
import Footer from './footer';

import Home from '../../routes/home';
import About from '../../routes/about';

import './app.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[500],
      contrastText: common.white,
    },
    secondary: {
      main: blueGrey[600],
      contrastText: common.white,
    },
  },
});

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Navigation />
        <Container>
          <Router>
            <RouterPage path="/" pageComponent={<Home />} />
            <RouterPage path="about" pageComponent={<About />} />
          </Router>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
