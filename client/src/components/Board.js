import React, { Component } from 'react';
import Cell from './Cell'
import Game from '../modules/gameLogic';

class Board extends Component {
    constructor() {
        super()
        this.state = {
            grid: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
            turnCount: 0,
            gameLogic: null
        }
    }

    // renderCell(i) {
    //     return <Cell value={i} placeToken={this.placeToken} />
    // }

    placeToken = (event) => {
        const index = parseInt(event.target.id)
        this.state.gameLogic.doTurn(index)
        this.setState({
            grid: this.state.gameLogic.board,
            turnCount: this.state.gameLogic.turnCount
        })
    }

    componentDidMount() {
        // let url = 'http://localhost:3000/games';
        // fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify({state: this.state.grid}),
        //     headers: {
        //     'Content-Type': 'application/json'
        //     }
        // })
          const game = new Game(this.state.grid, this.state.turnCount)
          this.setState({
              gameLogic: game
        })
    }

    render() {
        return (
            <div className="board">
                {/* <div id="first-row">  */}
                {/* {this.renderCell(this.state.grid[0])}
                {this.renderCell(this.state.grid[1])}
                {this.renderCell(this.state.grid[2])} */}
                {/* </div> */}
                {/* <div id="second-row"> */}
                {/* {this.renderCell(this.state.grid[3])}
                {this.renderCell(this.state.grid[4])}
                {this.renderCell(this.state.grid[5])} */}
                {/* </div> */}
                {/* <div id="third-row"> */}
                {/* {this.renderCell(this.state.grid[6])}
                {this.renderCell(this.state.grid[7])}
                {this.renderCell(this.state.grid[8])} */}
                {/* </div> */}
                <Cell id={0} value={this.state.grid[0]} placeToken={this.placeToken} />
                <Cell id={1} value={this.state.grid[1]} placeToken={this.placeToken} />
                <Cell id={2} value={this.state.grid[2]} placeToken={this.placeToken} />

                <Cell id={3} value={this.state.grid[3]} placeToken={this.placeToken} />
                <Cell id={4} value={this.state.grid[4]} placeToken={this.placeToken} />
                <Cell id={5} value={this.state.grid[5]} placeToken={this.placeToken} />

                <Cell id={6} value={this.state.grid[6]} placeToken={this.placeToken} />
                <Cell id={7} value={this.state.grid[7]} placeToken={this.placeToken} />
                <Cell id={8} value={this.state.grid[8]} placeToken={this.placeToken} />
            </div>
        )
    }
}

export default Board