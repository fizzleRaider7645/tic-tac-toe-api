import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from './Board';
import GameMenu from './GameMenu';
import { saveGame, restartGame } from '../actions/GameActions';

class GameContainer extends Component {

    saveGameClick = () => {
        const gameData = {game:{id: this.props.game.id, state: this.props.game.board, turn_count: this.props.game.turnCount}}
        saveGame(gameData)
        alert("Saved")
    }

    restartGameClick = (dispatch) => {
        const gameData = {game:{id: this.props.game.id, state: this.props.game.board, turn_count: this.props.game.turnCount}}
        this.props.restartGame(gameData)
    }

    render() {
        return (
            <div id="game-container">
                <div id="board">
                    <Board game={this.props.game}/>
                </div>
                <div id="menu">
                    <GameMenu endGame={this.props.endGame} restartGameClick={this.restartGameClick} saveGameClick={this.saveGameClick} boardState={this.props.game} />
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        game: state.game
    }
}

export default connect(mapStatetoProps, { restartGame })(GameContainer);