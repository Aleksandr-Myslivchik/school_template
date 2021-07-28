import { RESET_MATCHED_CARDS } from "../types/resetMatchedCards";

export const resetMatchedCards = () => {

    return {
        type: RESET_MATCHED_CARDS,
        payload: []
    }
}