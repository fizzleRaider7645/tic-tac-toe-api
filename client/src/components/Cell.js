import React, { Component } from 'react';
import '../App.css'
class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            value: null
        }
    }
    handleClick = () => {
        this.setState({
            value: 'X'
        })
    }

    render() {
        return (
        <div onClick={this.handleClick} className="cell">
            {this.state.value}
        </div>
        )
    }
}

export default Cell;