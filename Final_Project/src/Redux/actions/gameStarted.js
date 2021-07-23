import { GAME_STARTED } from "../types/gameStarted"


export const gameStarted = () => {

    return {
        type: GAME_STARTED,
        payload: false
    }
}