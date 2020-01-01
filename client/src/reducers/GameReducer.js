import * as types from '../actions/ActionTypes'
import Game from '../modules/gameLogic'
import { saveGame } from '../actions/GameActions';

const initial = {}
export default (state = initial, action) => {
    let game;
    switch(action.type) {
        case types.GET_NEW_GAME:
            game = new Game(action.payload.id, action.payload.state, action.payload.turn_count, action.payload.players)
            return game
        case types.LOAD_GAME:
            game = new Game(action.payload.id, action.payload.state, action.payload.turn_count)
            return game
        case types.PLACE_TOKEN:
            game = new Game(state.id, state.board, state.turnCount)
            game.doTurn(action.payload)
            return game
        case types.RESTART_GAME:
            game = new Game(state.id, state.board, state.turnCount)
            game.reset()
            return game
        case types.CLEAR_STORE:
            return {}
        default:
            return state;
    }
}