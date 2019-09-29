import * as types from '../actions/ActionTypes'
import Game from '../modules/gameLogic'
const initial = {}
export default (state = initial, action) => {
    let game;
    switch(action.type) {
        case types.GET_NEW_GAME:
            game = new Game(action.payload.state, action.payload.turn_count)
            return game
        case types.LOAD_GAME:
            game = new Game(action.payload.state, action.payload.turn_count)
            return game
        case types.PLACE_TOKEN:
            game = new Game(state.board, state.turnCount)
            let newBoard = game.board.slice()
            newBoard[action.payload] = game.player()
            game.doTurn()
            let updatedGame = new Game(newBoard, game.turnCount)
            return updatedGame
        default:
            return state;
    }
}