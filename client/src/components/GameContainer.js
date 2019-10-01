import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from './Board';
import GameMenu from './GameMenu';
import { saveGame } from '../actions/GameActions';

class GameContainer extends Component {
    constructor() {
        super()
    }


    saveGameClick = () => {
        const gameData = this.props.game
        debugger
        // saveGame(gameData)
    }

    render() {
        return (
            <div id="game-container">
                <div id="board">
                    <Board game={this.props.game}/>
                </div>
                <div id="menu">
                    <GameMenu saveGameClick={this.saveGameClick} boardState={this.props.game} />
                </div>
                <button onClick={this.props.endGame}>End Game</button>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        game: state.game
    }
}

export default connect(mapStatetoProps, {})(GameContainer);