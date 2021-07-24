import PropTypes from 'prop-types'


export const cardsDataModel = PropTypes.exact({

    cards: PropTypes.array,
    cardsLength: PropTypes.number,
    cellSize: PropTypes.number,
    coverType: PropTypes.PropTypes.oneOf(['', 'animals', 'persons', 'marvelCaracters']),
    difficulty: PropTypes.oneOf(['', 'Easy mode', 'Medium mode', 'Hard mode']),

})