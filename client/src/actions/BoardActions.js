import * as types from './ActionTypes';
export const placeToken = (event) => {
    return dispatch => {
        const index = parseInt(event.target.id)
        dispatch({
            type: types.PLACE_TOKEN,
            payload: index
        })
    }
}