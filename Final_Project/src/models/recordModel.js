import PropTypes from 'prop-types'


export const recordModel = PropTypes.exact({

    date: PropTypes.string,
    time: PropTypes.string,
    steps: PropTypes.number,
    mode: PropTypes.string,

})