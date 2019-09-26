import React, { Component } from 'react';
import Game from '../modules/gameLogic';
import { connect } from 'react-redux'

class LoadMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    handleClick = (event) => {
        debugger
    }

    componentDidMount() {
        // console.log(this.props)
    }
    
    render() {
        // let games
        // if(this.props.games) {
            // games = this.props.state.game.map(game => <p onClick={this.handleClick} key={this.props.state.game.id}>{this.props.state.game.name}</p>)
        // }
        return (
            <div id="load-menu">
                {/* {games} */}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
  return ({
      state
  })
}

export default connect(mapStatetoProps, null)(LoadMenu)