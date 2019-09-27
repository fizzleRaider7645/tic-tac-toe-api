import React, { Component } from 'react';
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
        this.props.startSavedGame()
    }

    render() {
        // let games
        // if(this.props.games) {
            const games = this.props.games.map(game => <p onClick={this.handleClick} id={game.id} key={game.id}>{game.name ? game.name : "No Name"}</p>)
        // }
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