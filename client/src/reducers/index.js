import {combineReducers} from 'redux'
import authReducer from './authReducer'
import main from './main'
import games from './games'
import game from './game'

export default combineReducers({
  auth: authReducer,
  news: main,
  games: games,
  game: game
})