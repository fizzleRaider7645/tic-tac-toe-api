import React, { Component } from 'react';
import Board from './Board';
import Menu from './Menu';

class Game extends Component {
    constructor() {
        super()
    }

    renderCell(i) {
        return <Cell value={i}/>
    }

    render() {
        return (
            <div id="Game">
                <div id="board">
                    <Board />
                </div>
                <div id="menu">
                    <Menu />
                </div>
            </div>
        )
    }
}

export default Game;