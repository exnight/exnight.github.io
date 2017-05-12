import React, { Component } from 'react';
import { Container, Divider, Grid, Header, List, Segment } from 'semantic-ui-react';

const About = () => (
  <Container>
    <Header as="h1">About</Header>
    <Divider />
    <Grid relaxed container>
      <Grid.Row>
        <Header as="h3" attached="top">Motto</Header>
        <Segment attached>
          <List relaxed size="big">
            <List.Item content="Less is More" />
            <List.Item content="Actions speak louder than words" />
          </List>
        </Segment>
      </Grid.Row>
      <Grid.Row>
        <Header as="h3" attached="top">Interesting Facts</Header>
        <Segment attached>
          <List relaxed size="big" bulleted>
            <List.Item content="I almost do not drink anything other than water" />
            <List.Item content="I am not good at design (You should have found out...)" />
            <List.Item content="I usually sleep at 11pm and wake up at 630am" />
            <List.Item content="I have been in a orchestra for 8 years" />
          </List>
        </Segment>
      </Grid.Row>
      <Grid.Row>
        <Header as="h3" attached="top">Skills</Header>
        <Segment attached>
          <List relaxed size="big">
            <List.Item icon="users" content="Leadership" />
            <List.Item icon="database" content="Python Data Analysis" />
            <List.Item icon="code" content="Python, Java Script" />
            <List.Item icon="html5" content="HTML5" />
          </List>
        </Segment>
      </Grid.Row>
    </Grid>
  </Container>
);

export default About;
