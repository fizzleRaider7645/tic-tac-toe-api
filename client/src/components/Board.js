import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell'
import { placeToken } from '../actions/BoardActions';

class Board extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="board">
                <Cell id={0} value={this.props.game.board ? this.props.game.board[0] : ""} placeToken={this.props.placeToken}/>
                <Cell id={1} value={this.props.game.board ? this.props.game.board[1] : ""} placeToken={this.props.placeToken}/>
                <Cell id={2} value={this.props.game.board ? this.props.game.board[2] : ""} placeToken={this.props.placeToken}/>

                <Cell id={3} value={this.props.game.board ? this.props.game.board[3] : ""} placeToken={this.props.placeToken}/>
                <Cell id={4} value={this.props.game.board ? this.props.game.board[4] : ""} placeToken={this.props.placeToken}/>
                <Cell id={5} value={this.props.game.board ? this.props.game.board[5] : ""} placeToken={this.props.placeToken}/>

                <Cell id={6} value={this.props.game.board ? this.props.game.board[6] : ""} placeToken={this.props.placeToken}/>
                <Cell id={7} value={this.props.game.board ? this.props.game.board[7] : ""} placeToken={this.props.placeToken}/>
                <Cell id={8} value={this.props.game.board ? this.props.game.board[8] : ""} placeToken={this.props.placeToken}/>
            </div>
        )
    }
}

export default connect(null, { placeToken })(Board)