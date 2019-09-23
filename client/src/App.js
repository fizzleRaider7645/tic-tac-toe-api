import React,  { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer';
import MainMenu from './components/MainMenu';

class App extends Component {
  constructor() {
    super()
    this.state = {
      newGame: false,
      loadGame: false
    }
  }
  handleClick = (event) => {
  }
  render() {
    let game;
    let mainMenu;
    game = <GameContainer />
    mainMenu = <MainMenu />
    return (
      
      <div className="App">
          <header className="App-header">
          Tic-Tac-Toe
        </header>
        {mainMenu}
      </div>
    )
  }
}

export default App;
