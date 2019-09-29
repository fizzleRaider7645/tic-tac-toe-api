import * as types from '../actions/ActionTypes'
const initial = {}
export default (state = initial, action) => {
    switch(action.type) {
        case types.GET_NEW_GAME:
            return action.payload
        case types.LOAD_GAME:
            return action.payload
        case types.PLACE_TOKEN:
            debugger
        // case types.UPDATE_BALANCE:
        // return {...state, account: { balance: action.payload } }
        // case types.USER_LOGOUT:
        // return {};
        // case types.ACTUATE_TRANSACTION:
        //     return { ...state, transactions: [...state.transactions, action.payload] }
        default:
            return state;
    }
}