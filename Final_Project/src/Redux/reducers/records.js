import { SAVE_RECORD } from "../types/saveRecord";

const initialState = {
    records: []
}

export const records = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_RECORD:
            return { ...state, records: [...state.records, action.payload] }

        default: return state
    }
}