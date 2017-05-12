import React, { Component } from 'react';
import { Card, Container, Grid, Header } from 'semantic-ui-react';

import Slideshow from './Slideshow';

import elliot from '../../img/elliot.jpg';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Grid relaxed stackable verticalAlign="middle">
          <Grid.Column width={12}>
            <Slideshow />
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <Header as="h1">Welcome</Header>
            <Card
              centered image={elliot} header="Leo Wong" meta="HKUST Student"
              description="I am a business student who codes.
              I enjoy business analytics as well as creating my own applications."
            />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Home;
