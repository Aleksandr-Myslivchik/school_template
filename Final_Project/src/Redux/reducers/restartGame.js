import { RESTART_GAME } from "../types/restartGame"
import { GAME_STARTED } from "../types/gameStarted"

const initialState = {

    shouldRestart: false
}

export const restartGame = (state = initialState, action) => {

    switch (action.type) {
        case RESTART_GAME:
            return { ...state, shouldRestart: action.payload }

        case GAME_STARTED:
            return { ...state, shouldRestart: action.payload }

        default: return state

    }
}

