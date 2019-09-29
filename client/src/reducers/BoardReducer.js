import * as types from '../actions/ActionTypes'
const initial = []
export default (state = initial, action) => {
    switch(action.type) {
        case types.PLACE_TOKEN:
            debugger
            return action.payload
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