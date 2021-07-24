import React from 'react'
import { Timer } from './TimerCmp'
import { Steps } from './StepCountCmp'
import './style.css'

export const Header = () => {



    return (
        <header className="game-pg-header">
            <Timer />
            <Steps />
        </header>
    )
}
