import React, { Component } from 'react';
import { Button, Container, Divider, Grid, Header, Icon } from 'semantic-ui-react';

import MsgForm from './MsgForm';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header as="h1">Contact</Header>
        <Divider />
        <Grid relaxed container>
          <Grid.Row>
            <Header as="h4">
              Contact me through these channels
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Button href="https://www.linkedin.com/in/jia-yeung-wong-05b838140/" color="blue">
              <Icon name="linkedin" size="large" /> LinkedIn
            </Button>
            <Button href="https://www.facebook.com/leownight" color="facebook">
              <Icon name="facebook" size="large" /> Facebook
            </Button>
            <Button href="https://github.com/exnight" color="grey">
              <Icon name="github" size="large" /> Github
            </Button>
          </Grid.Row>
          <Grid.Row>
            <Header as="h4">
              Or leave a message down here !
            </Header>
          </Grid.Row>
          <Grid.Row>
            <MsgForm />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Contact;
