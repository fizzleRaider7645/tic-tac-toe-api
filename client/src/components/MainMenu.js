import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PlayerSelectMenu from './PlayerSelectMenu';
import LoadMenu from './LoadMenu';

const MainMenu = props => {
    return (
        <Router>
            <div id="main-menu">
                <p><Link id="newGame" to="/playerselect">Start New Game</Link></p>
                <p id="loadGame"><Link to="/loadmenu">Load Game</Link></p>
                <Switch>
                    <Route exact path="/playerselect">
                        <PlayerSelectMenu/>
                    </Route>

                    <Route exact path="/loadmenu">
                        <LoadMenu />
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