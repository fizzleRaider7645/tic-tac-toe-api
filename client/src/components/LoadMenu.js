import React, { Component } from 'react';
import Game from '../modules/gameLogic';

class LoadMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/games')
        .then(res => res.json())
        .then(res => this.setState({games: res}))
    }
    
    render() {
        let games
        if(this.state.games) {
            games = this.state.games.map(game => <p key={game.id}>{game.name}</p>)
        }
        return (
            <div id="load-menu">
                {games}
            </div>
        )
    }
}

export default LoadMenu;