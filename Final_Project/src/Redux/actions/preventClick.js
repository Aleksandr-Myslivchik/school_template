import { PREVENT_CLICK } from "../types/preventClick"

export const preventClick = (data) => {
    return {
        type: PREVENT_CLICK,
        payload: data.isClickable
    }
}