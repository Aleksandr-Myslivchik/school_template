import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { countTimer } from '../../../../../Redux/actions/countTimer'
import { resetTimer } from '../../../../../Redux/actions/resetTimer'

import './style.css'


export const TimertoConnect = (props) => {



    useEffect(() => {

        let timerID
        if (props.CounterStoped) {

            clearInterval(timerID)

        } else {
            props.resetTimer()
            timerID = setInterval(() => {
                props.countTimer()
            }, 1000)
        }
        return () => {

            clearInterval(timerID)
        }
    }, [props.CounterStoped, props.gameStarted])


    return (
        <div>
            <span className='game-counter'>{new Date(props.timer).toLocaleTimeString()}</span>
        </div>
    )

}




const mapStateToProps = (state) => {

    return {

        CounterStoped: state.counter.disabledCounter,
        gameStarted: state.restartGame.shouldRestart,
        timer: state.counter.timer,

    }
}

const mapDispatchToprops = {
    countTimer,
    resetTimer,
}


export const Timer = connect(mapStateToProps, mapDispatchToprops)(TimertoConnect)