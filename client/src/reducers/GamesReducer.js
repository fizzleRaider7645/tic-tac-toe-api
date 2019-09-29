import * as types from '../actions/ActionTypes'
const initial = []
export default (state = initial, action) => {
    switch(action.type) {
        case types.LOAD_GAMES:
            return action.payload
        default:
            return state;
    }
}