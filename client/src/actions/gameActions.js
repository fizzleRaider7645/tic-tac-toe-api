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
            dispatch(setNewGame(game))
        })
    }
}

const setNewGame = (payload) => {
    return {
        type: types.GET_NEW_GAME,
        payload
    }
}

export const loadGame = (gameId) => {
    return dispatch => {
        return fetch(`http://localhost:3000/games/${gameId}`, {
            // method: 'POST',
            // body: JSON.stringify({state: [" ", " ", " ", " ", " ", " ", " ", " ", " "]}),
            headers: {
            'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(game => {
            dispatch(setLoadGame(game))
        })
    }
}

const setLoadGame = (payload) => {
    return {
        type: types.LOAD_GAME,
        payload
    }
}