import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { Container, Divider, Header } from 'semantic-ui-react';

import ProjectItem from './ProjectItem';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
    this.projectRef = firebase.database()
      .ref('project/');
  }

  componentWillMount() {
    this.projectRef.once('value')
      .then((snapshot) => {
        this.setState({
          projects: Object.keys(snapshot.val())
            .map(key => snapshot.val()[key]),
        });
      });
  }

  render() {
    return (
      <Container>
        <Header as="h1">Projects</Header>
        <Divider />
        <ProjectItem projects={this.state.projects} />
      </Container>
    );
  }
}

export default Projects;
