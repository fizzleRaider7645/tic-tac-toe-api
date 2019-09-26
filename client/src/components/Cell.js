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
        <div onClick={this.props.placeToken} className="cell">
            {this.props.value}
        </div>
        )
    }
}

export default Cell;