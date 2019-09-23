import React,  { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer';
import MainMenu from './components/MainMenu';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gameInProgress: false,
      loadGame: false
    }
  }
  handleClick = (event) => {
    console.log(event.target)
    if(event.target.id === "newGame") {
      this.setState({
        gameInProgress: true
      }, console.log(this.state))
    } else if(event.target.id === "loadGame") {
      this.setState({
        loadGame: true
      }, console.log(this.state))
    }
  }
  render() {
    let game;
    let mainMenu;
    if(this.state.gameInProgress) {
      game = <GameContainer />
    } else {
      mainMenu = <MainMenu handleClick={this.handleClick}/>
    }

    return (
      
      <div className="App">
          <header className="App-header">
          Tic-Tac-Toe
        </header>
        {this.state.gameInProgress ? "In Progress" : "Not"}
        {mainMenu}
        {game}
      </div>
    )
  }
}

export default App;
