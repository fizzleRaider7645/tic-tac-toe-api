import React, { Component } from "react"
import { createNewGame } from '../actions/GameActions';
import { connect } from 'react-redux'

class PlayerSelectMenu extends Component {
    constructor() {
        super()
        this.state = {
            player1: false,
            player2: false
        }
    }
    
    
    handleChange = (e) => {
        let val = (e.target.value === "true")
        let player = e.target.id
        this.setState(prevState => ({
            [player]: !val
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.startNewGame()
        this.props.createNewGame(this.state)
    }

   render() {
       return (
           <div id="player-select-menu">
               <form onSubmit={this.handleSubmit}>
                   <h3>Select Computer Players</h3>
                   <p>
                       <input onChange={this.handleChange} value={!!this.state.player1} id="player1" type="checkbox"></input>
                       <label htmlFor="player1">Player X</label>
                    </p>
                    
                    <p>
                        <input onChange={this.handleChange} value={!!this.state.player2} id="player2" type="checkbox"></input>
                        <label htmlFor="player2">Player O</label>
                   </p>
                   <button type="submit">Submit</button>
               </form>
           </div>
       )
   }
}

// export default PlayerSelectMenu
export default connect(null, { createNewGame })(PlayerSelectMenu)
