import React from 'react';
import { recordModel } from '../../../../models/recordModel';
import './style.css'

export const RecordsItem = (props) => (

    <div className='record-data-wrapper'>
        <div className='record-data-item'>
            <span className='data-record-category'>Difficulty:</span>
            <span> {props.mode} </span>
        </div>
        <div className='record-data-item'>
            <span className='data-record-category'>Date:</span>
            <span>{props.date}</span>
        </div>
        <div className='record-data-item'>
            <span className='data-record-category'>Time: </span>
            <span>{props.time}</span>
        </div>
        <div className='record-data-item'>
            <span className='data-record-category'>Total steps by game:</span>
            <span>{props.steps}</span>
        </div>
    </div>

)

RecordsItem.propTypes = { recordModel }