import React, { Component } from 'react';
import '../App.css'
class Cell extends Component {
    constructor(props) {
        super()
    }

    render() {
        let value;
        if(this.props.value) {
            value = this.props.value
        }
        return (
        <div onClick={this.props.placeToken} className="cell" id={this.props.id}>
            {value}
        </div>
        )
    }
}

export default Cell;