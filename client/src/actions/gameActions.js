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

export const loadGames = () => {
    return dispatch => {
        return fetch(`http://localhost:3000/games`, {
            headers: {
            'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(games => {
            dispatch(setLoadedGames(games))
        })
    }
}

const setLoadedGames = (payload) => {
    return {
        type: types.LOAD_GAMES,
        payload
    }
}

export const saveGame = (state) => {
    const url = 'http://localhost:3000/games';
    fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
}