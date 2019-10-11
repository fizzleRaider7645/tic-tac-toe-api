import * as types from './ActionTypes'
import Game from '../modules/gameLogic';

export const createNewGame = () => {
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
    const url = `http://localhost:3000/games/${state.id}`;
    fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
}
export const clearStore = () => {
    return {
        type: types.CLEAR_STORE
    }
}

export const restartGame = () => {
    return {
        type: types.RESTART_GAME
    }
}