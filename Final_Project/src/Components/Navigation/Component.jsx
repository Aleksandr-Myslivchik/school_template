import React from 'react'
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


export default Navigation