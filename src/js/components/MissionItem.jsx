import React, { Component } from 'react';
import { Checkbox, List } from 'semantic-ui-react';

class MissionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <List relaxed size="massive">
        {this.props.missions.map((item, i) => (
          <List.Item key={String(i)}>
            <Checkbox readOnly label={item.task} defaultChecked={item.completed} toggle />
          </List.Item>))}
      </List>
    );
  }
}

export default MissionItem;
