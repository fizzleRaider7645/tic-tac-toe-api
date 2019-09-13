import React,  { Component } from 'react';
import './App.css';
import Game from './components/GameContainer';

class App extends Component {
  render() {
    return (
      
      <div className="App">
           <header className="App-header">
          Tic-Tac-Toe
        </header>
        <Game />
      </div>
    )
  }
}

export default App;
