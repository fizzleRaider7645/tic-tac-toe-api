import React, { Component } from 'react';
import Cell from './Cell'
import Game from '../modules/gameLogic';

class Board extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        // const newGame = new Game()
        // newGame.board[0] = 'X'
        // newGame.board[1] = 'X'
        // newGame.board[2] = 'X'
        fetch('http://localhost:3000/games')
            .then(res => res.json())
            .then(res => console.log(res))
    }

    renderCell(i) {
        return <Cell value={i}/>
    }

    render() {
        return (
            <div className="board">
                <div id="first-row"> 
                {this.renderCell(0)}|
                {this.renderCell(1)}|
                {this.renderCell(2)}
                </div>
                -------------
                <div id="second-row">
                {this.renderCell(3)}|
                {this.renderCell(4)}|
                {this.renderCell(5)}
                </div>
                -------------
                <div id="third-row">
                {this.renderCell(6)}|
                {this.renderCell(7)}|
                {this.renderCell(8)}
                </div>
            </div>
        )
    }
}

export default Board