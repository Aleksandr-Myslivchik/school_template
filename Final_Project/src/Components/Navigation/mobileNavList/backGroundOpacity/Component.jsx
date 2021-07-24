import React from 'react'
import PropTypes from 'prop-types'


import './style.css'





export const BackOpacity = (props) => {

    return (
        <div className='background-opacity-mobile-menu'
            onClick={props.onBackOpacityClick}>
        </div>
    )
}

BackOpacity.propTypes = {
    onBackOpacityClick: PropTypes.func,
}
