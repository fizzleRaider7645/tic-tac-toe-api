import React,  { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer';
import MainMenu from './components/MainMenu';
import LoadMenu from './components/LoadMenu'
import { connect } from 'react-redux'
import { createNewGame, loadGame, loadGames, clearStore } from './actions/GameActions';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gameInProgress: false,
      loadGame: false
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    // if(event.target.id === "newGame") {
    //   this.setState({
    //     gameInProgress: true
    //   })
    //   this.props.createNewGame()


    // } else if(event.target.id === "loadGame") {
    //   this.setState({
    //     loadGame: true
    //   })
    //   this.props.loadGames()
    // }

    if(event.target.id === "loadGame") {
        this.setState({
          loadGame: true
        })
        this.props.loadGames()
      }
  }

  startSavedGame = () => {
    this.setState({
      gameInProgress: true
    })
  }

  startNewGame = () => {
    this.setState({
      gameInProgress: true
    })
  }

  endGame = () => {
    this.setState({
      gameInProgress: false,
      loadGame: false
    })
    this.props.clearStore()
  }
  render() {
    let game;
    let mainMenu;
    let loadMenu;
    if(this.state.gameInProgress)  {
      game = <GameContainer endGame={this.endGame}/>
    } else if(this.state.loadGame) {
      loadMenu = <LoadMenu startSavedGame={this.startSavedGame}/>
    } else {
      mainMenu = <MainMenu playerSelect={this.playerSelect} startNewGame={this.startNewGame}/>
    }

    return (
      
      <div className="App">
          <header className="App-header">
            <div className="Inner-App-header">
              Tic-Tac-Toe
          </div>
        </header>
        {mainMenu}
        {loadMenu}
        {game}
      </div>
    )
  }
}

export default connect(null, { createNewGame, loadGame, loadGames, clearStore })(App)
