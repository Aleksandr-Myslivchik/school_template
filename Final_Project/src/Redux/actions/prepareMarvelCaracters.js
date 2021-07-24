import { MARVEL_CARACTERS } from "../types/marvelCaracters";
import { MARVEL_CARACTERS as MARVEL_COVER } from "../../Constants/marvelCaracteres";
import { shuffle } from '../../plugins/'

export const prepareMarvelCaractersCover = () => {

    const cardsMarvel = MARVEL_COVER
    const preparedMarvelCover = [...cardsMarvel, ...cardsMarvel]
    shuffle(preparedMarvelCover)

    return {
        type: MARVEL_CARACTERS,
        payload: {
            cards: preparedMarvelCover,
            cardsLength: preparedMarvelCover.length,
            coverType: 'marvelCaracters',
            cellSize: 10,
            difficulty: 'Hard mode',

        }
    }
}