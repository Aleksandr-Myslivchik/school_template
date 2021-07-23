import { PREVENT_CLICK } from "../types/preventClick"

const initialState = {
    isClickable: true
}

export const preventClick = (state = initialState, action) => {
    switch (action.type) {
        case PREVENT_CLICK:
            return { ...state, isClickable: action.payload }
    
        default: return state
    }
}