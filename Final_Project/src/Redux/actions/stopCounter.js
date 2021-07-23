import { STOP_COUNTER } from "../types/counterStop"

export const stopCounter = () => {
    return {
        type: STOP_COUNTER,
        payload: true
    }
}