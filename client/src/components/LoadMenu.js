import React, { Component } from 'react';
import Game from '../modules/gameLogic';
import { connect } from 'react-redux'
import { loadGame } from '../actions/GameActions';

class LoadMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    handleClick = (event) => {
        const gameId = parseInt(event.target.id)
        this.props.loadGame(gameId)
    }

    render() {
        let games
        if(this.props.games) {
            games = this.props.games.map(game => <p onClick={this.handleClick} id={game.id} key={game.id}>{game.name}</p>)
        }
        return (
            <div id="load-menu">
                {games}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
  return ({
      games: state.games
  })
}

export default connect(mapStatetoProps, { loadGame })(LoadMenu)