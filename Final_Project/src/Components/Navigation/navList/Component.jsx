import React from 'react'
import styled from 'styled-components'
import NavItems from '../navItems'

const NavListStyled = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    flex: 0 1 40%;
    justify-content: center;

    @media (max-width: 600px) {
            display: none;
     }

`


const NavList = (props) => {

    return (

        <NavListStyled>
            <NavItems />
        </NavListStyled >


    )
}

export default NavList
