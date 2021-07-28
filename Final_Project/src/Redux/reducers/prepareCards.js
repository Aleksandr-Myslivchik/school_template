import { ANIMALS_COVER } from "../types/animalsCover"
import { PERSONS_COVER } from "../types/personsCover"
import { MARVEL_CARACTERS } from "../types/marvelCaracters"
import { RESET_CARDS } from "../types/resetCards"
import { RESHUFFLE_CARDS } from "../types/reshuffleCards"
import { shuffle } from '../../plugins/'


const initialState = {

    cardsData: {
        cards: [],
        cardsLength: 0,
        cellSize: 0,
        coverType: '',
        difficulty: '',
    }
}

export const prepareCards = (state = initialState, action) => {

    switch (action.type) {

        case ANIMALS_COVER:
            return { ...state, cardsData: action.payload }

        case PERSONS_COVER:
            return { ...state, cardsData: action.payload }

        case MARVEL_CARACTERS:
            return { ...state, cardsData: action.payload }

        case RESET_CARDS:
            return { ...state, cardsData: action.payload }

        case RESHUFFLE_CARDS:
            const reshuffledCards = state.cardsData.cards
            shuffle(reshuffledCards)
            return { ...state, cardsData: { ...state.cardsData, cards: reshuffledCards } }

        default: return state
    }

}