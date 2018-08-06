import React, { Component } from 'react';
import './App.css';
import QuoteMachine from './QuoteMachine.js';


class App extends Component {
  render() {
    return (
      <div id="quote-box">
       <QuoteMachine />
      </div>
    );
  }
}

export default App;