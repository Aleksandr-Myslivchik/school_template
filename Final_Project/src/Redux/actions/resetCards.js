import { RESET_CARDS } from "../types/resetCards";

export const resetCards = () => {

    return {
        type: RESET_CARDS,
        payload: {
            cards: [],
            cardsLength: 0,
            cellSize: 0,
            coverType: '',

        }
    }
}