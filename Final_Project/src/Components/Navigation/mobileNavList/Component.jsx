import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavItems from '../navItems/'
import { toggleeMobileMenu } from '../../../Redux/actions/disableMobileMenu'
import { BackOpacity } from './backGroundOpacity'
import { MobileMenuButton } from './mobileMenuButton/'
import { getMobileMenuState } from '../../../Redux/selects'

import './style.scss'




const MobileNavigationToConnect = (props) => {


    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    const onClick = (e) => {
        setMobileMenuActive(pre => !pre)
        props.toggleeMobileMenu()
    }

    const onBackOpacityClick = (e) => {

        setMobileMenuActive(pre => !pre)
        props.toggleeMobileMenu()

    }

    return (
        <>
            <MobileMenuButton clicked={mobileMenuActive} onClick={onClick} />
            <div className={`mobile-menu-wrapper ${mobileMenuActive ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>
                <ul className='mobile-menu-nav-list'>
                    <NavItems />
                </ul>
            </div>
            {
                props.mobileMenu && <BackOpacity onBackOpacityClick={onBackOpacityClick} />
            }
        </>

    )
}



const mapStateToProps = (state) => {
    return {

        mobileMenu: getMobileMenuState(state)
    }
}

const mapDispatchToProps = {
    toggleeMobileMenu,
}

MobileNavigationToConnect.propTypes = {
    toggleeMobileMenu: PropTypes.func,
    mobileMenu: PropTypes.bool,
}

export const MobileNavigation = connect(mapStateToProps, mapDispatchToProps)(MobileNavigationToConnect)