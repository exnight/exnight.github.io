import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'wouter';

import Navigation from './navigation';
import Footer from './footer';

import Home from '../../routes/home';

import iconSetup from './iconSetup';

import './app.css';

const WIP = lazy(() => import('../../routes/wip'));

iconSetup();

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full flex flex-col">
      <Navigation />

      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <WIP />
          </Route>
          <Route path="/posts">
            <WIP />
          </Route>
          <Route path="/projects">
            <WIP />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
