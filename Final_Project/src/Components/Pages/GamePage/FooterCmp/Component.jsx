import React from 'react'
import { connect } from 'react-redux'
import { restartGame } from '../../../../Redux/actions/restartGame'
import { preparePersonsCover } from '../../../../Redux/actions/preparePersonsCover'
import { prepareAnimalsCover } from '../../../../Redux/actions/prepareAnimalsCover'
import { withRouter } from 'react-router'
import { resetCards } from '../../../../Redux/actions/resetCards'


import './style.css'

const FootertoConnect = (props) => {

    const onRestartClick = () => {

        props.restartGame()
        const { coverType } = props.cardsData

        if (coverType === 'animals') props.prepareAnimalsCover()
        if (coverType === 'persons') props.preparePersonsCover()
        console.log(coverType)
    }

    const onNewGame = (e) => {

        localStorage.removeItem('ProfileData')
        props.history.push('welcome')
        props.resetCards()

    }

    return (
        <footer className="game-pg-footer">
            <button onClick={onRestartClick} className={'btn-footer restart'}>Restart</button>
            <button onClick={onNewGame} className={'btn-footer new-game'}>New Game</button>
        </footer>
    )
}



const mapStateToProps = (state) => {
    return {
        cardsData: state.prepareCards.cardsData,

    }
}



const mapDispatchToprops = {

    restartGame,
    preparePersonsCover,
    prepareAnimalsCover,
    resetCards
}

export const Footer = withRouter(connect(mapStateToProps, mapDispatchToprops)(FootertoConnect))