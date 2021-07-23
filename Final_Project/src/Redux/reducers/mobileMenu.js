import { TOGGLE_MOBILE_MENU } from "../types/toggleMobileMenu"

const initialState = {

    isActive: false
}

export const mobileMenu = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_MOBILE_MENU:
            return { ...state, isActive: !state.isActive }

        default: return state
    }
}