import { STOP_COUNTER } from "../types/counterStop";
import { RESTART_COUNTER } from "../types/restartCounter";
import { COUNT_TIMER } from "../types/countTimer";
import { RESET_TIMER } from "../types/resetTimer";

const INIT_TIME = 1626037200000


const initialState = {

    disabledCounter: false,
    timer: INIT_TIME,

}

export const counter = (state = initialState, action) => {
    switch (action.type) {
        case STOP_COUNTER:
            return { ...state, disabledCounter: action.payload }

        case RESTART_COUNTER:
            return { ...state, disabledCounter: action.payload }

        case COUNT_TIMER:
            return { ...state, timer: state.timer + 1000 }

        case RESET_TIMER:
            return { ...state, timer: INIT_TIME }

        default: return state
    }
}

