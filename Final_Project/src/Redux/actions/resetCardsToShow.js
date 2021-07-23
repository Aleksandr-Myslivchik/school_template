import { RESET_CARD_TO_SHOW } from "../types/resetCardsToShow"


export const resetCardsToShow = () => {

    return {
        type: RESET_CARD_TO_SHOW,
        payload: []
    }
}