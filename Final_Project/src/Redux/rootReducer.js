import { combineReducers } from "redux"
import { preventClick } from "./reducers/preventClick"
import { countStep } from "./reducers/countSteps"
import { counter } from "./reducers/counter"
import { restartGame } from "./reducers/restartGame"
import { prepareCards } from "./reducers/prepareCards"
import { matchedCards } from "./reducers/matchedCards"
import { cardsToShow } from "./reducers/cardsToShow"
import { records } from "./reducers/records"
import { mobileMenu } from "./reducers/mobileMenu"


export const rootReducer = combineReducers({

    preventClick,
    countStep,
    counter,
    restartGame,
    prepareCards,
    matchedCards,
    cardsToShow,
    records,
    mobileMenu,


})

