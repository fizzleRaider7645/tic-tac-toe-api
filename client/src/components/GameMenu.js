import React from 'react';

const GameMenu = props => {
    return (
        <div id="game-menu">
            <p onClick={props.saveGameClick}>Save</p>
            <p onClick={props.restartGameClick}>Restart</p>
            <p onClick={props.endGame}>Exit</p>
        </div>
    )
}

export default GameMenu