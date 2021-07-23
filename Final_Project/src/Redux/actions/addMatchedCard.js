import { ADD_MATCHED_CARD } from "../types/addMatchedCard";

export const addMatchedCard = (data) => {

    return {
        type: ADD_MATCHED_CARD,
        payload: data
    }
}