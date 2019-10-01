import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameMenu extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div id="game-menu">
                <p onClick={this.props.saveGameClick}>Save</p>
                <p onClick={this.props.endGame}>Exit</p>
            </div>
        )
    }
}

export default connect(null, { })(GameMenu);