import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Missions from './components/Missions';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';

import '../css/semantic.custom.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Projects} />
            <Route path="/mission" component={Missions} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
