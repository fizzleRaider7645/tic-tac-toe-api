import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell'
import Game from '../modules/gameLogic';
import { placeToken } from '../actions/BoardActions';

class Board extends Component {
    constructor() {
        super()
        this.state = {
            // game: this.props.game,
            // turnCount: this.props.game.turnCount,
            // gameLogic: null
        }
    }

    // renderCell(i) {
    //     return <Cell value={i} placeToken={this.placeToken} />
    // }

    // placeToken = (event) => {
    //     const index = parseInt(event.target.id)
    //     this.props.game.doTurn(index)
    //     this.setState({
    //         grid: this.props.game.gameLogic.board,
    //         turnCount: this.props.game.gameLogic.turnCount
    //     })
    // }

    componentDidMount() {
        const game = new Game(this.props.game.state, this.props.game.turnCount)
        // this.setState({
        //     grid: this.props.game,
        //     gameLogic: game
        // })
    }

    render() {
        return (
            <div className="board">
                <Cell id={0} value={this.props.game.state ? this.props.game.state[0] : ""} placeToken={this.props.placeToken}/>
                {/* <Cell id={1} value={this.props.game.state ? this.props.game.state[1] : ""} placeToken={this.placeToken}/>
                <Cell id={2} value={this.props.game.state ? this.props.game.state[2] : ""} placeToken={this.placeToken}/>

                <Cell id={3} value={this.props.game.state ? this.props.game.state[3] : ""} placeToken={this.placeToken}/>
                <Cell id={4} value={this.props.game.state ? this.props.game.state[4] : ""} placeToken={this.placeToken}/>
                <Cell id={5} value={this.props.game.state ? this.props.game.state[5] : ""} placeToken={this.placeToken}/>

                <Cell id={6} value={this.props.game.state ? this.props.game.state[6] : ""} placeToken={this.placeToken}/>
                <Cell id={7} value={this.props.game.state ? this.props.game.state[7] : ""} placeToken={this.placeToken}/>
                <Cell id={8} value={this.props.game.state ? this.props.game.state[8] : ""} placeToken={this.placeToken}/> */}
            </div>
        )
    }
}

// export default Board
// const mapStatetoProps = (state) => {
//     return {
//         game: state.game
//     }
// }
export default connect(null, { placeToken })(Board)
// export default Board