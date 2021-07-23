import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { HIDE_CARDS_TIMEOUT } from '../../../../../Constants/hideCardsTimeOut'
import { preventClick } from '../../../../../Redux/actions/preventClick'

import './style.scss'



const CardFaceItemToConnect = (props) => {

    const [showCard, setShowCard] = useState(false)


    useEffect(() => {

        const { cardsToShow, matchedCards } = props

        //to hide opened cards when restarted
        if (!cardsToShow.length) {
            setShowCard(pre => false)
            return
        }
        //check what to open 
        let timeOutID

        let cardId1, cardName1;
        if (cardsToShow[0]) {
            [cardId1, cardName1] = cardsToShow[0]
        }

        let cardId2;
        if (cardsToShow[1]) {
            [cardId2] = cardsToShow[1]
        }

        if (cardId1 === props.id || cardId2 === props.id) {

            setShowCard(pre => true)
        }
        if (cardId1 && cardId2 && !matchedCards.includes(cardName1)) {
            //prevent excessive clicks and disable click
            props.preventClick({ isClickable: false })
            new Promise(res => {
                timeOutID = setTimeout(() => {
                    setShowCard(pre => false)
                    res()
                    //enable click
                }, HIDE_CARDS_TIMEOUT)
            }).then(() => {
                props.preventClick({ isClickable: true })
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
                <img src={props.src} className='card-face back' alt=''/>
                <figcaption className={`card-face front ${props.cardsData.coverType === 'marvelCaracters' ? 'old-mode-size' : ''}`}>
                </figcaption>
            </div>
        </figure >

    )

}


const mapStateToProps = (state) => {

    return {
        matchedCards: state.matchedCards.matchedCards,
        cardsToShow: state.cardsToShow.cardsToShow,
        cardsData: state.prepareCards.cardsData,
    }

}


const mapDispatchToprops = {

    preventClick

}


export const CardFaceItem = connect(mapStateToProps, mapDispatchToprops)(CardFaceItemToConnect)