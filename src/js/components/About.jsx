import React from 'react';
import { Container, Divider, Grid, Header, List, Segment } from 'semantic-ui-react';

const About = () => (
  <Container>
    <Header as="h1">About</Header>
    <Divider />
    <Grid relaxed container>
      <Grid.Row>
        <Header as="h5" attached="top">Motto</Header>
        <Segment attached="bottom">
          <List relaxed size="medium">
            <List.Item content="Less is More" />
            <List.Item content="Simple is Beautiful" />
          </List>
        </Segment>
      </Grid.Row>
      <Grid.Row>
        <Header as="h5" attached="top">Skills</Header>
        <Segment attached="bottom">
          <List relaxed size="medium">
            <List.Item icon="users" content="Leadership & Commitment" />
            <List.Item icon="database" content="Big Data Mining & Management, Machine Learning" />
            <List.Item icon="code" content="Python, C++, Excel VBA, LaTeX" />
            <List.Item icon="html5" content="Web Development (JavaScript, React JS)" />
          </List>
        </Segment>
      </Grid.Row>
      <Grid.Row>
        <Header as="h5" attached="top">Fun Facts</Header>
        <Segment attached="bottom">
          <List relaxed size="medium" bulleted>
            <List.Item content="Water can be the only drink for me" />
            <List.Item content="I'm not a great designer, but I'm learning to become one" />
            <List.Item content="Sleeping at 11pm and waking up by 7am is great" />
            <List.Item content="I have 8 years of experience playing violin in an orchestra" />
          </List>
        </Segment>
      </Grid.Row>
      <Grid.Row>
        <Header as="h5" attached="top">Hobbies</Header>
        <Segment attached="bottom">
          <List relaxed size="medium">
            <List.Item icon="code" content="Coding, Coding, Coding" />
            <List.Item icon="soccer" content="Team Sports (Basketball, Netball)" />
            <List.Item icon="game" content="Counter-Strike: Global Offensive" />
            <List.Item icon="book" content="Self-help Books" />
            <List.Item icon="lab" content="New Things" />
          </List>
        </Segment>
      </Grid.Row>
    </Grid>
  </Container>
);

export default About;
