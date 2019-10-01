// import React, { Component } from 'react';
// import { connect } from 'react-redux';
import React from 'react'

// class GameMenu extends Component {
//     constructor(props) {
//         super(props)
//     }
    
//     render() {
//         return (
//             <div id="game-menu">
//                 <p onClick={this.props.saveGameClick}>Save</p>
//                 <p onClick={this.props.endGame}>Exit</p>
//             </div>
//         )
//     }
// }

const GameMenu = props => {
    return (
        <div id="game-menu">
            <p onClick={props.saveGameClick}>Save</p>
            <p onClick={props.endGame}>Exit</p>
        </div>
    )
}

// export default connect(null, { })(GameMenu);
export default GameMenu