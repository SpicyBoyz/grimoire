import React, { Component } from 'react';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Grimoire</h1>
          <Navigation />
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
