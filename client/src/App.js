import React,  { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer';
import MainMenu from './components/MainMenu';
import LoadMenu from './components/LoadMenu'
class App extends Component {
  constructor() {
    super()
    this.state = {
      gameInProgress: false,
      loadGame: false
    }
  }
  handleClick = (event) => {
    if(event.target.id === "newGame") {
      this.setState({
        gameInProgress: true
      })
    } else if(event.target.id === "loadGame") {
      this.setState({
        loadGame: true
      })
    }
  }

  endGame = () => {
    this.setState({
      gameInProgress: false
    })
  }
  render() {
    let game;
    let mainMenu;
    let loadMenu;
    if(this.state.gameInProgress) {
      game = <GameContainer endGame={this.endGame}/>
    } else if(this.state.loadGame) {
      loadMenu = <LoadMenu />
    } else {
      mainMenu = <MainMenu handleClick={this.handleClick}/>
    }

    return (
      
      <div className="App">
          <header className="App-header">
          Tic-Tac-Toe
        </header>
        {mainMenu}
        {loadMenu}
        {game}
      </div>
    )
  }
}

export default App;
