import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { CardsContainer } from './styledCmp'
import { CardItem } from './styledCmp'
import { CardFaceItem } from './cardFaceItem/'
import { countStep } from '../../../../Redux/actions/countSteps'
import { stopCounter } from '../../../../Redux/actions/stopCounter'
import { resetSteps } from '../../../../Redux/actions/resetSteps'
import { allowClick } from '../../../../Redux/actions/allowClick'
import { resetCards } from '../../../../Redux/actions/resetCards'
import { prepareAnimalsCover } from '../../../../Redux/actions/prepareAnimalsCover'
import { addMatchedCard } from '../../../../Redux/actions/addMatchedCard'
import { resetMatchedCards } from '../../../../Redux/actions/resetMatchedCards'
import { addCardsToShow } from '../../../../Redux/actions/addCardsToShow'
import { resetCardsToShow } from '../../../../Redux/actions/resetCardsToShow'
import { gameStarted } from '../../../../Redux/actions/gameStarted'
import { restartCounter } from '../../../../Redux/actions/restartCounter'
import { saveRecord } from '../../../../Redux/actions/saveRecord'
import { reshuffleCards } from '../../../../Redux/actions/reshuffleCards'
import sound from '../../../../Constants/Assets/flipsound/win.wav'
import flipSound from '../../../../Constants/Assets/flipsound/flip.mp3'
import { cardsDataModel } from '../../../../models/cardsDataModel'
import { REDIRECT_ALL_MATCHED } from '../../../../Constants/redirectTimerOutAllMatched'
import './style.css'
import { getCardsData, getCardsToShow, getClickState, getCounterState, getMatchedCards, getShouldRestart, getSteps, getTimer } from '../../../../Redux/selects'


const GameCmpToConnect = (props) => {

    const audio = useRef()
    const flip = useRef()

    const clickHandler = (e) => {
        if (!props.isClickable) return
        if (e.target.localName !== 'figcaption') return

        try {
            const currentTagName = e.target.parentElement.attributes.name.value
            const currentTagID = e.target.parentElement.attributes.id.value
            if (props.cardsToShow.length === 1 && props.cardsToShow[0][0] === currentTagID) return
            if (props.cardsToShow.length === 1) {
                flip.current.play()
                props.countStep()
            }
            if (props.cardsToShow.length === 2) {
                props.resetCardsToShow()
            }
            props.addCardsToShow([currentTagID, currentTagName])

        } catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => { // 
        if (props.shouldRestart) {
            props.restartCounter()
            props.resetSteps()
            props.resetCardsToShow()
            props.resetMatchedCards()
            props.reshuffleCards()
            props.allowClick()
            props.gameStarted()
        }

    }, [props.shouldRestart])

    useEffect(() => {
        if (props.cardsToShow.length === 2) {
            const [[cardId1, cardName1], [cardId2, cardName2]] = props.cardsToShow
            if (cardName1 === cardName2 && cardId1 !== cardId2) {
                props.addMatchedCard(cardName1)
            }
        }
    }, [props.cardsToShow])


    useEffect(() => {

        const { matchedCards, timer, steps, cardsData: { cardsLength, difficulty } } = props
        let redirectTimeOutID

        if (!!cardsLength && cardsLength === matchedCards.length * 2) {
            audio.current.play()
            props.stopCounter()
            const result = {
                date: new Date().toLocaleString(),
                steps,
                mode: difficulty,
                time: new Date(timer).toLocaleTimeString()
            }
            const recordsFromLStorage = JSON.parse(localStorage.getItem('GameRecords')) || []
            localStorage.setItem(`GameRecords`, JSON.stringify([...recordsFromLStorage, result]))
            props.saveRecord(result)
            redirectTimeOutID = setTimeout(() => {
                props.history.push('congratulation')
            }, REDIRECT_ALL_MATCHED)
        }
        return () => {
            clearTimeout(redirectTimeOutID)
        }
    }, [props.matchedCards])

    useEffect(() => {

        if (!props.cardsData.cards.length) {
            props.history.push('welcome')
            return
        }

        return () => {
            props.resetMatchedCards()
            props.resetSteps()
            props.restartCounter()
            props.allowClick()
            props.resetCardsToShow()
            props.reshuffleCards()
        }

    }, [])

    return (
        <div className="game-root">
            <audio ref={audio} autostart="false" src={sound}></audio>
            <audio ref={flip} autostart="false" src={flipSound}></audio>
            <CardsContainer onClick={clickHandler} fieldSize={props.cardsData.coverType}>
                {props.cardsData.cards.map((card, ind) => (
                    <CardItem key={ind} cellSize={props.cardsData.cellSize}>
                        <CardFaceItem src={card.pic} name={card.id} id={ind + ''} />
                    </CardItem>
                ))}
            </CardsContainer>
        </div>
    )

}

GameCmpToConnect.propTypes = {

    isClickable: PropTypes.bool,
    CounterStoped: PropTypes.bool,
    shouldRestart: PropTypes.bool,
    cardsData: cardsDataModel,
    matchedCards: PropTypes.array,
    cardsToShow: PropTypes.array,
    steps: PropTypes.number,
    timer: PropTypes.number,
    countStep: PropTypes.func,
    stopCounter: PropTypes.func,
    gameStarted: PropTypes.func,
    resetSteps: PropTypes.func,
    allowClick: PropTypes.func,
    resetCards: PropTypes.func,
    prepareAnimalsCover: PropTypes.func,
    addMatchedCard: PropTypes.func,
    resetMatchedCards: PropTypes.func,
    addCardsToShow: PropTypes.func,
    resetCardsToShow: PropTypes.func,
    restartCounter: PropTypes.func,
    saveRecord: PropTypes.func,
    reshuffleCards: PropTypes.func,

}


const mapStateToProps = (state) => {

    return {
        isClickable: getClickState(state),
        CounterStoped: getCounterState(state),
        shouldRestart: getShouldRestart(state),
        cardsData: getCardsData(state),
        matchedCards: getMatchedCards(state),
        cardsToShow: getCardsToShow(state),
        steps: getSteps(state),
        timer: getTimer(state),

    }
}

const mapDispatchToprops = {

    countStep,
    stopCounter,
    gameStarted,
    resetSteps,
    allowClick,
    resetCards,
    prepareAnimalsCover,
    addMatchedCard,
    resetMatchedCards,
    addCardsToShow,
    resetCardsToShow,
    restartCounter,
    saveRecord,
    reshuffleCards

}



const GameCmp = withRouter(connect(mapStateToProps, mapDispatchToprops)(GameCmpToConnect))
export default GameCmp