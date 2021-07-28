import { PREVENT_CLICK } from "../types/preventClick"

export const preventClick = () => {
    return {
        type: PREVENT_CLICK,
    }
}