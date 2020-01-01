import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PlayerSelectMenu from './PlayerSelectMenu';

const MainMenu = props => {
    return (
        <Router>
            <div id="main-menu">
                <p><Link id="newGame" to="/">Start New Game</Link></p>
                <p id="loadGame"><Link id="loadGame" onClick={props.handleClick} to="/">Load Game</Link></p>
                <Switch>
                    <Route exact path="/">
                        <PlayerSelectMenu startNewGame={props.startNewGame}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    // <div id="main-menu">
        /* <p onClick={props.handleClick} id="newGame">
            New Game
            </p>
            
        <p onClick={props.handleClick} id="loadGame">
            Load Game
            </p> */
        // </div>
    )
}

export default MainMenu;