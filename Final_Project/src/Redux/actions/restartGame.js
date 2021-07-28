import { RESTART_GAME } from "../types/restartGame";


export const restartGame = () => ({
    type: RESTART_GAME,
    payload: true
})