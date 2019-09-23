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
        return (
            <div id="main-menu">
            </div>
        )
    }
}

export default LoadMenu;