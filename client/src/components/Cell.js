import React, { Component } from 'react';
import '../App.css'
class Cell extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
        <div onClick={this.props.placeToken} className="cell" id={this.props.id}>
            {this.props.value}
        </div>
        )
    }
}

export default Cell;