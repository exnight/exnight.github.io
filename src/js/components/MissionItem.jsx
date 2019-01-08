import React, { Component } from 'react';
import { Checkbox, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class MissionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { missions } = this.props;
    return (
      <List relaxed size="massive">
        {missions.map((item, i) => (
          <List.Item key={String(i)}>
            <Checkbox readOnly label={item.task} defaultChecked={item.completed} toggle />
          </List.Item>
        ))}
      </List>
    );
  }
}

MissionItem.propTypes = {
  missions: PropTypes.instanceOf(Object),
};

MissionItem.defaultProps = {
  missions: {},
};

export default MissionItem;
