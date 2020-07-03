export const SAVE_GAME_PROCESS = 'SAVE_GAME_PROCESS';

export function gameSaver(gameObject) {
    return {
        type: SAVE_GAME_PROCESS,
        payload: gameObject
    }
}