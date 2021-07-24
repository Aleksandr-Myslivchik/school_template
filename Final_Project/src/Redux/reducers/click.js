import { ALLOW_CLICK } from "../types/allowClick"
import { PREVENT_CLICK } from "../types/preventClick"

const initialState = {
    isClickable: true
}

export const click = (state = initialState, action) => {
    switch (action.type) {
        case PREVENT_CLICK:
            return { ...state, isClickable: false }

        case ALLOW_CLICK:
            return { ...state, isClickable: true }

        default: return state
    }
}