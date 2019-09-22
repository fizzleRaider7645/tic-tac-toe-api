import React, { Component } from 'react';
import '../App.css'
class Cell extends Component {
    constructor(props) {
        super()
    }
    handleClick = () => {
        alert('click')
    }

    render() {
        return (
        <div onClick={this.handleClick} className="cell">
            {this.props.value}
        </div>
        )
    }
}

export default Cell;