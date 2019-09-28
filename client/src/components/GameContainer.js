import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from './Board';
import GameMenu from './GameMenu';

class GameContainer extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id="game-container">
                <div id="board">
                    <Board game={this.props.game}/>
                </div>
                <div id="menu">
                    <GameMenu />
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

export default connect(mapStatetoProps, null)(GameContainer);