import React, { Component } from 'react';
import { Button, Item, Label, Modal } from 'semantic-ui-react';

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const knowMore = <Button primary basic floated="right" content="Read More" />;
    const itemContent = ({ text, tags }) => (
      <div className="description">
        <p>{text}</p>
        {tags.map(tag => <Label key={tag.text} tag content={tag.text} color={tag.color} />)}
      </div>);
    const itemDetail = ({ title, text }) => (
      <Modal
        dimmer="inverted" trigger={knowMore} closeIcon="close" content={text} header={title}
        actions={[
          { key: 'yes',
            content: 'Got it',
            color: 'green',
            triggerClose: true,
            inverted: true,
            icon: 'checkmark',
            onClick: this.close,
          },
        ]}
      />);

    return (
      <Item.Group relaxed>
        {this.props.projects.map((item, i) => (
          <Item
            key={String(i)} header={item.title} extra={itemDetail(item)}
            description={itemContent(item)}
          />))}
      </Item.Group>
    );
  }
}

export default ProjectItem;
