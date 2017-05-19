import { createStore, applyMiddleware, combineReducer } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import lyricsReducer from './reducers/lyrics-reducer'
import playerReducer from './reducers/player-reducer'

//let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let store = createStore(
                        combineReducers({
                          lyrics: lyricsReducer,
                          player: playerReducer
                        }), 
                        applyMiddleware(loggerMiddleware, thunkMiddleware));
export default store;
