// import React, { Component } from 'react';
import React from 'react'

// class MainMenu extends Component {
//     constructor(props) {
//         super(props)
//     }
    
//     render() {
//         return (
//             <div id="main-menu">
//                 <p onClick={this.props.handleClick} id="newGame">
//                 New Game
//                 </p>
                
//                 <p onClick={this.props.handleClick} id="loadGame">
//                 Load Game
//                 </p>
//             </div>
//         )
//     }
// }

const MainMenu = props => {
    return (
    <div id="main-menu">
        <p onClick={props.handleClick} id="newGame">
            New Game
            </p>
            
        <p onClick={props.handleClick} id="loadGame">
            Load Game
            </p>
        </div>
    )
}

export default MainMenu;