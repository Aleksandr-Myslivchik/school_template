import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import './style.css'


const StepsToConnect = (props) => {

    return (
        <div>
            <span className='game-steps'>STEPS: {props.count}</span>
        </div>
    )

}


const mapStateToProps = (state) => {

    return {

        count: state.countStep.stepCount
    }

}

export const Steps = connect(mapStateToProps, null)(StepsToConnect)