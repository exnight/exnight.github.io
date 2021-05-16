import React from 'react';
import { Route } from 'wouter';

import Navigation from './navigation';
import Footer from './footer';

import Home from '../../routes/home';
import WIP from '../../routes/wip';

import './app.css';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full flex flex-col">
      <Navigation />

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

      <Footer />
    </div>
  );
};

export default App;
