import * as types from './ActionTypes';
import Game from '../modules/gameLogic';
export const placeToken = (event) => {
    return dispatch => {
        const index = parseInt(event.target.id)
        // this.props.game.doTurn(index)
        dispatch({
            type: types.PLACE_TOKEN,
            payload: index
        })
    }
}

// export const loadGame = (gameId) => {
//     return dispatch => {
//         return fetch(`http://localhost:3000/games/${gameId}`, {
//             headers: {
//             'Content-Type': 'application/json'
//             }
//         }).then(res => res.json()).then(game => {
//             dispatch(setLoadGame(game))
//         })
//     }
// }

// const setLoadGame = (payload) => {
//     return {
//         type: types.LOAD_GAME,
//         payload
//     }
// }