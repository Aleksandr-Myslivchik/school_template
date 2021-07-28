import { combineReducers } from "redux"
import { click } from "./reducers/click"
import { countStep } from "./reducers/countSteps"
import { counter } from "./reducers/counter"
import { restartGame } from "./reducers/restartGame"
import { prepareCards } from "./reducers/prepareCards"
import { matchedCards } from "./reducers/matchedCards"
import { cardsToShow } from "./reducers/cardsToShow"
import { records } from "./reducers/records"
import { mobileMenu } from "./reducers/mobileMenu"


export const rootReducer = combineReducers({

    click,
    countStep,
    counter,
    restartGame,
    prepareCards,
    matchedCards,
    cardsToShow,
    records,
    mobileMenu,


})

