import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class Navigation extends Component {
  constructor() {
    super();
    this.state = { activeItem: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, { content }) {
    this.setState({ activeItem: content });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu color="primary" stackable icon="labeled" size="mini">
        <Container>
          <Menu.Item
            header as={Link} to="/" icon="desktop" content="Leo Wong"
            active={activeItem === 'Leo Wong'} onClick={this.handleClick}
          />

          <Menu.Menu position="right">
            <Menu.Item
              as={Link} to="/about" icon="id card" content="About"
              active={activeItem === 'About'} onClick={this.handleClick}
            />
            <Menu.Item
              as={Link} to="/project" icon="idea" content="Projects"
              active={activeItem === 'Projects'} onClick={this.handleClick}
            />
            <Menu.Item
              as={Link} to="/mission" icon="crosshairs" content="Mission Impossible"
              active={activeItem === 'Mission Impossible'} onClick={this.handleClick}
            />
            <Menu.Item
              as={Link} to="/contact" icon="talk" content="Contact"
              active={activeItem === 'Contact'} onClick={this.handleClick}
            />
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default withRouter(Navigation);
