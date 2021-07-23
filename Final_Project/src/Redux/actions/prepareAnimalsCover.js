import { ANIMALS } from "../../Constants/animals";
import { ANIMALS_COVER } from "../types/animalsCover";
import { shuffle } from "../../Components/Pages/GamePage/plugins";



export const prepareAnimalsCover = () => {

    const cardsEasy = ANIMALS
    const preparedEasyModeCards = [...cardsEasy, ...cardsEasy]
    shuffle(preparedEasyModeCards)
    return {
        type: ANIMALS_COVER,
        payload: {
            cards: preparedEasyModeCards,
            cardsLength: preparedEasyModeCards.length,
            coverType: 'animals',
            cellSize: 23,
            difficulty: 'Easy mode'
        }
    }
}

