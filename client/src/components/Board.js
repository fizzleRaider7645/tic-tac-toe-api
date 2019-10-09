import React from 'react';
import Cell from './Cell'
import { connect } from 'react-redux';
import { placeToken } from '../actions/BoardActions';

const Board = props => {
    return (
        <div className="board">
            <Cell id={0} value={props.game.board ? props.game.board[0] : ""} placeToken={props.placeToken}/>
            <Cell id={1} value={props.game.board ? props.game.board[1] : ""} placeToken={props.placeToken}/>
            <Cell id={2} value={props.game.board ? props.game.board[2] : ""} placeToken={props.placeToken}/>
        
            <Cell id={3} value={props.game.board ? props.game.board[3] : ""} placeToken={props.placeToken}/>
            <Cell id={4} value={props.game.board ? props.game.board[4] : ""} placeToken={props.placeToken}/>
            <Cell id={5} value={props.game.board ? props.game.board[5] : ""} placeToken={props.placeToken}/>
        
            <Cell id={6} value={props.game.board ? props.game.board[6] : ""} placeToken={props.placeToken}/>
            <Cell id={7} value={props.game.board ? props.game.board[7] : ""} placeToken={props.placeToken}/>
            <Cell id={8} value={props.game.board ? props.game.board[8] : ""} placeToken={props.placeToken}/>
        </div>
    )
}

export default connect(null, { placeToken })(Board)