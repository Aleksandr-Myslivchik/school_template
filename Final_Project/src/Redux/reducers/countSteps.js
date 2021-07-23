import { COUNT_STEPS } from '../types/countSteps'
import { RESET_STEPS } from '../types/resetSteps'

const initialState = {
    stepCount: 0
}

export const countStep = (state = initialState, action) => {
    switch (action.type) {
        case COUNT_STEPS:
            return { ...state, stepCount: state.stepCount+1 }

            case RESET_STEPS:
            return { ...state, stepCount: 0 }

        default: return state
    }

}