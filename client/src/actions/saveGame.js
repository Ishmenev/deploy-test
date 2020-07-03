import { SAVE_GAME_PROCESS } from './types'

export const gameSaver = (gameObject) => async dispatch => {
    dispatch({type: SAVE_GAME_PROCESS, payload: gameObject})
}