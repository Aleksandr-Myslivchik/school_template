import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { HIDE_CARDS_TIMEOUT } from '../../../../../Constants/hideCardsTimeOut'
import { preventClick } from '../../../../../Redux/actions/preventClick'
import { allowClick } from '../../../../../Redux/actions/allowClick'
import { cardsDataModel } from '../../../../../models/cardsDataModel'
import { getCardsData, getCardsToShow, getMatchedCards } from '../../../../../Redux/selects'

import './style.scss'



const CardFaceItemToConnect = (props) => {

    const [showCard, setShowCard] = useState(false)

    useEffect(() => {

        const { cardsToShow, matchedCards } = props

        if (!cardsToShow.length) {
            setShowCard(false)
            return
        }
        let timeOutID

        const [cardId1, cardName1] = cardsToShow[0] ?? ''
        const [cardId2] = cardsToShow[1] ?? ''


        if (cardId1 === props.id || cardId2 === props.id) {
            setShowCard(true)
        }
        if (cardId1 && cardId2 && !matchedCards.includes(cardName1 || cardId2)) {
            props.preventClick()
            new Promise(res => {
                timeOutID = setTimeout(() => {
                    setShowCard(false)
                    res()
                }, HIDE_CARDS_TIMEOUT)
            }).then(() => {
                props.allowClick()
            }
            )

        }
        return () => {

            clearTimeout(timeOutID)
        }


    }, [props.cardsToShow])


    return (

        <figure className="flip" >
            <div id={props.id} name={props.name} className={`card ${(showCard || props.matchedCards.includes(props.name)) ? 'rotate' : ''} ${props.cardsData.coverType === 'marvelCaracters' ? 'old-mode-size' : ''}`}>
                <img src={props.src} className='card-face back' alt='' />
                <figcaption className={`card-face front ${props.cardsData.coverType === 'marvelCaracters' ? 'old-mode-size' : ''}`}>
                </figcaption>
            </div>
        </figure >

    )

}

CardFaceItemToConnect.propTypes = {
    preventClick: PropTypes.func,
    allowClick: PropTypes.func,
    matchedCards: PropTypes.array,
    cardsData: cardsDataModel,
}


const mapStateToProps = (state) => {

    return {
        matchedCards: getMatchedCards(state),
        cardsToShow: getCardsToShow(state),
        cardsData: getCardsData(state),
    }

}


const mapDispatchToprops = {

    preventClick,
    allowClick,

}


export const CardFaceItem = connect(mapStateToProps, mapDispatchToprops)(CardFaceItemToConnect)