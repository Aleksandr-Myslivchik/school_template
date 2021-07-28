import { ADD_MATCHED_CARD } from "../types/addMatchedCard"
import { RESET_MATCHED_CARDS } from "../types/resetMatchedCards"

const initialState = {
    matchedCards: []
}

export const matchedCards = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MATCHED_CARD:
            return { ...state, matchedCards: state.matchedCards.concat(action.payload) }

        case RESET_MATCHED_CARDS:
            return { ...state, matchedCards: action.payload }

        default: return state
    }
}