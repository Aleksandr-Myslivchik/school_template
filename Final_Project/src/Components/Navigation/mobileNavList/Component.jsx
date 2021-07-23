import React, { useState } from 'react'
import { connect } from 'react-redux'
import NavItems from '../navItems/'
import { toggleeMobileMenu } from '../../../Redux/actions/disableMobileMenu'
import { BackOpacity } from './backGroundOpacity'
import { MobileMenuButton } from './mobileMenuButton/'


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

        mobileMenu: state.mobileMenu.isActive
    }
}

const mapDispatchToProps = {
    toggleeMobileMenu,
}

export const MobileNavigation = connect(mapStateToProps, mapDispatchToProps)(MobileNavigationToConnect)