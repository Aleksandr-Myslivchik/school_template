import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSteps } from '../../../../../Redux/selects'

import './style.css'


const StepsToConnect = (props) => {

    return (
        <div>
            <span className='game-steps'>STEPS: {props.count}</span>
        </div>
    )

}

StepsToConnect.propTypes = {
    count: PropTypes.number,
}


const mapStateToProps = (state) => {

    return {

        count: getSteps(state)
    }

}

export const Steps = connect(mapStateToProps, null)(StepsToConnect)