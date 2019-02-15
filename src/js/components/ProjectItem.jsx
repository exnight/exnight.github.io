import React, { Component } from 'react';
import { Button, Item, Label, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const knowMore = <Button primary basic floated="right" content="Read More" />;
    const itemContent = ({ tags }) => (
      <div className="description">
        {tags.map(tag => <Label key={tag.text} tag content={tag.text} color={tag.color} />)}
      </div>
    );
    const itemDetail = ({ title, text }) => (
      <Modal
        dimmer="inverted" trigger={knowMore} closeIcon="close" content={text} header={title} centered
        actions={[
          { key: 'yes',
            content: 'Got it',
            color: 'green',
            inverted: true,
            icon: 'checkmark',
            onClick: this.close,
          },
        ]}
      />
    );

    const { projects } = this.props;
    return (
      <Item.Group relaxed>
        {projects.map((item, i) => (
          <Item
            key={String(i)} header={item.title} extra={itemDetail(item)}
            description={itemContent(item)}
          />
        ))}
      </Item.Group>
    );
  }
}

ProjectItem.propTypes = {
  projects: PropTypes.instanceOf(Object),
};

ProjectItem.defaultProps = {
  projects: {},
};

export default ProjectItem;
