import { ADD_CARD_TO_SHOW } from "../types/addCardsToShow"

export const addCardsToShow = (data) => {

    return {
        type: ADD_CARD_TO_SHOW,
        payload: data
    }
}