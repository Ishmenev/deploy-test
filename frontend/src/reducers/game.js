import {SAVE_GAME_PROCESS} from '../actions/saveGame';

export const initialState = {
    levelSize: {
        width: 20,
        height: 10,
    },

    fieldSize: {
        width: 40,
        height: 40,
    },

    player: {
        positionX: 4,
        positionY: 8
    },

    inventory: {
        keys: 0
    },
    level: []
};

export default function game(state = initialState, action) {
    switch (action.type) {
        case SAVE_GAME_PROCESS:
            return {...state,   ...action.payload};

        default:
            return state
    }
}