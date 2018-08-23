import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Container } from 'semantic-ui-react'

class AppMenu extends Component {
  render() {
    return (
      <Menu stackable borderless size='big'>
        <Container>
          <Menu.Item name='home'>
            <Icon name='cubes' />Cube3
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default AppMenu
