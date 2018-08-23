import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state={current: 'Demo'};
  }

  handleRouteChange = (e, d) => {
    this.props.onRouteChange(d);
    this.setState({current: d});
  }

  render() {
    return (
      <Router>
        <Dropdown item text={this.state.current}>
          <Dropdown.Menu>
            <Dropdown.Item text='Weather' onClick={ (e) =>this.handleRouteChange(e, 'Weather') } />
          </Dropdown.Menu>
        </Dropdown>
      </Router>
    );
  }
}

export default AppRouter
