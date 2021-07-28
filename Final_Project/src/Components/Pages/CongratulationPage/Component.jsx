import React, { useEffect, useState } from 'react';
import { ProfileData } from '../ProfilePage/profileDataCmp';
import { CONGRATULATION_REDIRECT_TIMEOUT } from '../../../Constants/congratulationRedirectTimeId';
import { withRouter } from 'react-router';
import Record from './RecordCmp/Component';
import './style.scss'
import { compose } from 'redux';


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
        setDate(date)
        setTime(time)
        setSteps(steps)
        setMode(mode)

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
                        <Record date={date} time={time} steps={steps} mode={mode} />
                    </div>
                </div>
            </section>
        </main>
    )

}


export default compose(withRouter(Congratulation))

