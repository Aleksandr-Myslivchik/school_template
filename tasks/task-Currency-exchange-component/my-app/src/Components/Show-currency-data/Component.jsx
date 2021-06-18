import React from 'react'
import './style.css'
import { CURRENCIES } from '../../Constants/Currencies'
import moment from "moment";



const [[BYN], , [USD]] = CURRENCIES

export function Show(props) {

    return (
        <div className="show-data-wrapper">
            <span className="base-crs">{props.baseCrs} {props.baseCrsSelect || USD} equals</span>
            <span className="crs-convert-to">{props.crsConvertedTo} {props.convertedCrsSelect || BYN}</span>
            <span className="crs-date">{moment().format('MMM D, YYYY HH:mm')}</span>
        </div>
    )

}


