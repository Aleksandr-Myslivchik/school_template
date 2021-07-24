import { createSelector } from 'reselect'

const getCards = (state) => {
    return state.prepareCards.cardsData
}

export const getCardsData = createSelector(getCards, (cardsData) => {
    return cardsData
})

export const getMobileMenuState = (state) => {
    return state.mobileMenu.isActive
}

export const getMatchedCards = (state) => {
    return state.matchedCards.matchedCards
}

export const getCardsToShow = (state) => {
    return state.cardsToShow.cardsToShow
}

export const getClickState = (state) => {
    return state.click.isClickable
}

export const getCounterState = (state) => {
    return state.counter.disabledCounter
}

export const getShouldRestart = (state) => {
    return state.restartGame.shouldRestart
}

export const getSteps = (state) => {
    return state.countStep.stepCount
}

export const getTimer = (state) => {
    return state.counter.timer
}