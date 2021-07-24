import React from 'react'
import PropTypes from 'prop-types'
import NavList from './navList/'
import { MobileNavigation } from './mobileNavList/'

import './style.css'

const Navigation = (props) => {

    return (
        <nav className='navigation'>
            {props.children}
            <NavList />
            <MobileNavigation />
        </nav>
    )
}

Navigation.propTypes = {
    children: PropTypes.element
}


export default Navigation