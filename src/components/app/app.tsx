import React from 'react';
import { Router, RouteComponentProps, Location } from '@reach/router';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { common, blueGrey, lightBlue } from '@material-ui/core/colors';

import CssBaseline from '@material-ui/core/CssBaseline';

import Navigation from './navigation';
import Footer from './footer';

import Home from '../../routes/home';
import Resume from '../../routes/about';

import './app.css';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[500],
      contrastText: common.white,
    },
    secondary: {
      main: blueGrey[800],
      contrastText: common.white,
    },
  },
  typography: {
    fontFamily: 'Lato, Roboto, sans-serif',
    h1: {
      fontFamily: 'Dancing Script, Roboto, sans-serif',
    },
  },
});

theme = responsiveFontSizes(theme);

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Location>
          {({ location }) => <Navigation location={location.pathname} />}
        </Location>

        <Router>
          <RouterPage path="/" pageComponent={<Home />} />
          <RouterPage path="about" pageComponent={<Resume />} />
          <RouterPage default pageComponent={<Home />} />
        </Router>

        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
