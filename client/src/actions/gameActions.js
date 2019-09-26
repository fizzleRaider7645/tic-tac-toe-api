import * as types from './ActionTypes'

// export const getUser = () => {
//     return dispatch => {
//         return fetch(`${ API_URL }/account`, {
//             method: 'GET',
//             headers: {
//               token: Auth.getToken(),
//               'Authorization': `Token ${Auth.getToken()}`
//             }
//         }).then(res => res.json()).then(user => {
//             dispatch(setUser(user))
//         })
//     }
// }

// const setUser = payload => {
//     return {
//         type: types.GET_USER,
//         payload
//     }
// }

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

// let url = 'http://localhost:3000/games';
// fetch(url, {
//     method: 'POST',
//     body: JSON.stringify({state: this.state.grid}),
//     headers: {
//     'Content-Type': 'application/json'
//     }
// })