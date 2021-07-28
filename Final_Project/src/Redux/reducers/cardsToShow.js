import { ADD_CARD_TO_SHOW } from "../types/addCardsToShow"
import { RESET_CARD_TO_SHOW } from "../types/resetCardsToShow"

const initialState = {
    cardsToShow: []
}

export const cardsToShow = (state = initialState, action) => {
    switch (action.type) {

        case ADD_CARD_TO_SHOW:
            return { ...state, cardsToShow: [...state.cardsToShow, action.payload] }

        case RESET_CARD_TO_SHOW:

            return { ...state, cardsToShow: action.payload }

        default: return state
    }
}