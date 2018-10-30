import React, { Component } from 'react';
import Router from './components/Router/Router';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="">
          <h1>Grimoire</h1>
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
