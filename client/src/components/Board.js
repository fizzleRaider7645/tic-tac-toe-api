import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id="board">
           Board
           <Cell />
            </div>
        )
    }
}

export default Board