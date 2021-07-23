import React from 'react'


import './style.scss'

export const Rules = (props) => {

    return (
        <div className='rules-description-container'>
            <h3>Rules :</h3>
            <span>Choose difficulty mode</span>
            <span>If you refresh page you have to choose difficulty again</span>
            <span>Collect all pairs using as few tries as possible</span>
            <span>New game button reset all settings</span>
        </div>
    )
}


