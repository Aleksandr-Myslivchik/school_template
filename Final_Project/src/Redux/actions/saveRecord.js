import { SAVE_RECORD } from "../types/saveRecord";

export const saveRecord = (data) => {

    return {
        type: SAVE_RECORD,
        payload: data
    }
}