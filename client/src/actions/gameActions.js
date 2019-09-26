import * as types from './ActionTypes'

export const getNewGame = () => {
    return dispatch => {
        return fetch('http://localhost:3000/games', {
            method: 'POST',
            body: JSON.stringify({state: [" ", " ", " ", " ", " ", " ", " ", " ", " "]}),
            headers: {
            'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(game => {
            dispatch(setGame(game))
        })
    }
}

const setGame = (payload) => {
    return {
        type: types.GET_NEW_GAME,
        payload
    }
}