import React from 'react';
import { recordModel } from '../../../../models/recordModel';

import './style.scss'


const Record = (props) => {

    return (

        <div className='current-record-wrapper'>
            <div className='record-content'>
                <div className='record-data'><span>Date: </span><span>{props.date}</span></div>
                <div className='record-data'><span>Time: </span><span>{props.time}</span></div>
                <div className='record-data'><span>Steps: </span><span>{props.steps}</span></div>
                <div className='record-data'><span>Difficulty mode: </span><span>{props.mode}</span></div>
            </div>
        </div>
    )

}

Record.propTypes = { recordModel }

export default Record

