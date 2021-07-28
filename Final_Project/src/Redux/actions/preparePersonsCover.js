import { PERSONS_COVER } from "../types/personsCover";
import { PERSONS } from "../../Constants/persons";
import { shuffle } from '../../plugins/'



export const preparePersonsCover = () => {

    const cardsPerons = PERSONS
    const preparedPersonsCover = [...cardsPerons, ...cardsPerons]
    shuffle(preparedPersonsCover)

    return {
        type: PERSONS_COVER,
        payload: {
            cards: preparedPersonsCover,
            cardsLength: preparedPersonsCover.length,
            coverType: 'persons',
            cellSize: 13,
            difficulty: 'Medium mode',

        }
    }
}