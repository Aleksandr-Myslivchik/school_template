import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ProfileData } from '../ProfilePage/profileDataCmp';
import { CONGRATULATION_REDIRECT_TIMEOUT } from '../../../Constants/congratulationRedirectTimeId';
import { withRouter } from 'react-router';
import './style.scss'


const Congratulation = (props) => {

    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [steps, setSteps] = useState()
    const [mode, setMode] = useState()


    useEffect(() => {

        let REDIRECT_ID
        const recordData = JSON.parse(localStorage.getItem('GameRecords'))
        if (!recordData) return
        const { date, time, steps, mode } = recordData.[recordData.length - 1]
        setDate(pre => date)
        setTime(pre => time)
        setSteps(pre => steps)
        setMode(pre => mode)

        REDIRECT_ID = setTimeout(() => {

            props.history.push('records')

        }, CONGRATULATION_REDIRECT_TIMEOUT)

        return () => {
            clearTimeout(REDIRECT_ID)
        }

    }, [])



    return (
        <main className='congratulation-page container'>
            <section className='congratulation-page-record-data-section'>
                <div className='content-wrapper'>
                    <div className='congratulation-section-header-wrapper header-wrapper_h2'>
                        <h2 className='header-s2'>Congratulation!!!</h2>
                    </div>
                    <div className='content'>
                        <span>Your current record</span>
                        <ProfileData />
                        <div className='current-record-wrapper'>
                            <div className='record-content'>
                                <div className='record-data'><span>Date: </span><span>{date}</span></div>
                                <div className='record-data'><span>Time: </span><span>{time}</span></div>
                                <div className='record-data'><span>Steps: </span><span>{steps}</span></div>
                                <div className='record-data'><span>Difficulty mode: </span><span>{mode}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}



withRouter(Congratulation)

export default connect()(Congratulation)