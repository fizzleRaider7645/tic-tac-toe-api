import React, { Component } from 'react';
import Board from './Board';
// import Menu from './MainMenu';
// import Game from '../modules/gameLogic';

class GameContainer extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id="game-container">
                <div id="board">
                    <Board />
                </div>
                <div id="menu">
                    {/* <Menu /> */}
                </div>
            </div>
        )
    }
}

export default GameContainer;