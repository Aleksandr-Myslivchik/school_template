import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { restartGame } from '../../../../Redux/actions/restartGame'
import { preparePersonsCover } from '../../../../Redux/actions/preparePersonsCover'
import { prepareAnimalsCover } from '../../../../Redux/actions/prepareAnimalsCover'
import { resetCards } from '../../../../Redux/actions/resetCards'
import { cardsDataModel } from '../../../../models/cardsDataModel'
import { getCardsData } from '../../../../Redux/selects'
import './style.scss'


const FootertoConnect = (props) => {

    const onRestartClick = () => {

        props.restartGame()
        const { coverType } = props.cardsData

        if (coverType === 'animals') props.prepareAnimalsCover()
        if (coverType === 'persons') props.preparePersonsCover()
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



FootertoConnect.propTypes = {
    cardsData: cardsDataModel,
    restartGame: PropTypes.func,
    preparePersonsCover: PropTypes.func,
    prepareAnimalsCover: PropTypes.func,
    resetCards: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        cardsData: getCardsData(state)
    }
}


const mapDispatchToprops = {

    restartGame,
    preparePersonsCover,
    prepareAnimalsCover,
    resetCards
}


export const Footer = withRouter(connect(mapStateToProps, mapDispatchToprops)(FootertoConnect))