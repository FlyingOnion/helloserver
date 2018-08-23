import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import 'semantic-ui-css/semantic.min.css';

import AppMenu from './menu/menu';

class App extends Component {
  render() {
    return <div>Hello world</div>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
