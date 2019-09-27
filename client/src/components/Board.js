import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        const game = new Game(this.state.grid, this.state.turnCount)
        this.setState({
            gameLogic: game
        })
    }

    render() {
        return (
            <div className="board">
                {/* <Cell id={0} value={this.state.grid[0]} placeToken={this.placeToken} />
                <Cell id={1} value={this.state.grid[1]} placeToken={this.placeToken} />
                <Cell id={2} value={this.state.grid[2]} placeToken={this.placeToken} />

                <Cell id={3} value={this.state.grid[3]} placeToken={this.placeToken} />
                <Cell id={4} value={this.state.grid[4]} placeToken={this.placeToken} />
                <Cell id={5} value={this.state.grid[5]} placeToken={this.placeToken} />

                <Cell id={6} value={this.state.grid[6]} placeToken={this.placeToken} />
                <Cell id={7} value={this.state.grid[7]} placeToken={this.placeToken} />
                <Cell id={8} value={this.state.grid[8]} placeToken={this.placeToken} /> */}
                <Cell id={0} value={this.props.game.state ? this.props.game.state[0] : ""} placeToken={this.placeToken} />
                <Cell id={1} value={this.props.game.state ? this.props.game.state[1] : ""} />
                <Cell id={2} value={this.props.game.state ? this.props.game.state[2] : ""} />

                <Cell id={3} value={this.props.game.state ? this.props.game.state[3] : ""} />
                <Cell id={4} value={this.props.game.state ? this.props.game.state[4] : ""} />
                <Cell id={5} value={this.props.game.state ? this.props.game.state[5] : ""} />

                <Cell id={6} value={this.props.game.state ? this.props.game.state[6] : ""} />
                <Cell id={7} value={this.props.game.state ? this.props.game.state[7] : ""} />
                <Cell id={8} value={this.props.game.state ? this.props.game.state[8] : ""} />
            </div>
        )
    }
}

// export default Board
const mapStatetoProps = (state) => {
    return {
        game: state.game
    }
}
export default connect(mapStatetoProps, {})(Board)