import React, { Component } from 'react';

class MainMenu extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div id="main-menu">
                <p onClick={this.props.handleClick} id="newGame">
                New Game
                </p>
                
                <p onClick={this.props.handleClick} id="loadGame">
                Load Game
                </p>
            </div>
        )
    }
}

export default MainMenu;