import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import './style.css'

const NavItems = (props) => {

    const { cardsLength } = props.cardsData
    const profileData = JSON.parse(localStorage.getItem('ProfileData'))

    return (
        <>
            <li className='nav-list-item'>
                <Link to='/welcome'>Welcome</Link>
            </li>
            {!!profileData && <li className='nav-list-item'>
                <Link to='/profile'>Profile</Link>
            </li>}
            {/* acces game page when cards are set */}
            {
                !!cardsLength && <li className='nav-list-item'>
                    <Link to='/game'>Game</Link>
                </li>
            }
            {!!localStorage.getItem('ProfileData') && <li className='nav-list-item'>
                <Link to='/congratulation'>Congratulation</Link>
            </li>}
            <li className='nav-list-item'>
                <Link to='/records'>Records</Link>
            </li>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cardsData: state.prepareCards.cardsData,
    }
}


export default connect(mapStateToProps, null)(NavItems)