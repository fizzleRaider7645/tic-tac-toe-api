import React, { Component } from 'react';

class MainMenu extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div id="main-menu">
                <button onClick={this.handleClick} id="newGame">
                New Game
                </button>
                
                <button onClick={this.handleClick} id="loadGame">
                Load Game
                </button>
            </div>
        )
    }
}

export default MainMenu;