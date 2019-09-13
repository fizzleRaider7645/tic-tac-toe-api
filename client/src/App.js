import React,  { Component } from 'react';
import Board from './components/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
           <header className="App-header">
          Home
        </header>
          <Board />
      </div>
    )
  }
}

export default App;
