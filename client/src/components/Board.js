import React, { Component } from 'react';
import Cell from './Cell'
import Game from '../modules/gameLogic';

class Board extends Component {
    constructor() {
        super()
        this.state = {
            grid: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
            turnCount: 0
        }
    }

    renderCell(i) {
        return <Cell value={i}/>
    }

    componentDidMount() {
        let url = 'http://localhost:3000/games';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({state: this.state.grid}),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        // .then(res => res.json())
        //   .then(res => this.setState({
        //     gameId: res.id,
        //     turnCount: res.turn_count
        //   }))
          const game = new Game(this.state.grid, this.state.turnCount)
          debugger
    }

    render() {
        return (
            <div className="board">
                {/* <div id="first-row">  */}
                {this.renderCell(this.state.grid[0])}
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