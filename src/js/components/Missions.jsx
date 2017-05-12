import React, { Component } from 'react';
import firebase from 'firebase';
import { Container, Divider, Header } from 'semantic-ui-react';

import MissionItem from './MissionItem';
// TODO: change the display of missions, current display too boring
class Missions extends Component {
  constructor() {
    super();
    this.state = {
      missions: [],
    };
    this.planRef = firebase.database()
      .ref('plan/');
  }

  componentWillMount() {
    this.planRef.once('value')
      .then((snapshot) => {
        this.setState({
          missions: Object.keys(snapshot.val())
            .map(key => snapshot.val()[key]),
        });
      });
  }

  render() {
    return (
      <Container>
        <Header as="h1">Mission Impossible</Header>
        <Divider />
        <MissionItem missions={this.state.missions} />
      </Container>
    );
  }
}

export default Missions;
