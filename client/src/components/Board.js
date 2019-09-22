import React, { Component } from 'react';
import Cell from './Cell'
import Game from '../modules/gameLogic';

class Board extends Component {
    constructor() {
        super()
        this.state = {
            grid: [],
            turnCount: 0
        }
    }

    componentDidMount() {
        const game = new Game()
        Game.loadPreviousGames()
    }

    renderCell(i) {
        return <Cell value={i}/>
    }

    render() {
        return (
            <div className="board">
                {/* <div id="first-row">  */}
                {this.renderCell('X')}
                {this.renderCell(this.state.grid[1])}
                {this.renderCell(this.state.grid[2])}
                {/* </div> */}
                {/* <div id="second-row"> */}
                {this.renderCell(this.state.grid[3])}
                {this.renderCell(this.state.grid[4])}
                {this.renderCell(this.state.grid[5])}
                {/* </div> */}
                {/* <div id="third-row"> */}
                {this.renderCell(this.state.grid[6])}
                {this.renderCell(this.state.grid[7])}
                {this.renderCell(this.state.grid[8])}
                {/* </div> */}
            </div>
        )
    }
}

export default Board