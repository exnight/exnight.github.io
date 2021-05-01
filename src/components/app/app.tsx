import React from 'react';
import { Router, RouteComponentProps, Location } from '@reach/router';

import Navigation from './navigation';
import Footer from './footer';

import Home from '../../routes/home';

import './app.css';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const App: React.FC = () => {
  return (
    <>
      <Location>
        {({ location }) => <Navigation location={location.pathname} />}
      </Location>

      <Router>
        <RouterPage path="/" pageComponent={<Home />} />
        <RouterPage default pageComponent={<Home />} />
      </Router>

      <Footer />
    </>
  );
};

export default App;
