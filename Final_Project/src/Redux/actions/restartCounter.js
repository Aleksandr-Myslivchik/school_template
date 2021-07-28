import { RESTART_COUNTER } from "../types/restartCounter"


export const restartCounter = () => {

    return {
        type: RESTART_COUNTER,
        payload: false
    }
}