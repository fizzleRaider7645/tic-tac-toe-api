import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import gameReducer from './reducers/GameReducer';
import gamesReducer from './reducers/GamesReducer';
const reducers = combineReducers({
  game: gameReducer,
  games: gamesReducer
});


const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);