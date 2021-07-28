import styled from "styled-components";
import PropTypes from 'prop-types'

const MobileMenuItem = styled.div`

    width: 100%;
    height: 2px;
    background: red;
    transition: transform .5s ease;


`


const MobileMenuButtonStyled = styled.div`

position: absolute;
right: 15px;
width: 40px;
height: 50px;
display: flex;
flex-direction: column;
justify-content: space-around;
cursor: pointer;
z-index: 1000;
right:${p => p.clicked ? '300px' : '15px'};
transition: right .3s ease;

 ${MobileMenuItem}:nth-child(1) {
    transform: ${p => p.clicked ? 'rotate(35deg)' : ''};
    transition: transform .3s ease;
 }

 ${MobileMenuItem}:nth-child(2) {
    transform: ${p => p.clicked ? 'rotate(-35deg) ' : ''};
    transition: transform .3s ease;    
}

${MobileMenuItem}:nth-child(n+3) {
    display: ${p => p.clicked ? 'none' : ''};
}


${MobileMenuItem}:nth-child(1) {
    
    position: absolute;
    top: calc(50% - 1px);
}

:hover  ${MobileMenuItem}:nth-child(1) {
    transform: rotate(35deg);
    transition: transform .3s ease;
}

:hover  ${MobileMenuItem}:nth-child(2) {
    transform: rotate(-35deg);
    transition: transform .3s ease;

}

:hover  ${MobileMenuItem}:nth-child(n+3) {
    display:none;
}
@media (max-width: 320px) {
    right: ${p => p.clicked ? '270px' : '15px'};

}

        @media (min-width: 600px) {
        display: none;
}
`


export const MobileMenuButton = (props) => {

    return (
        <MobileMenuButtonStyled clicked={props.clicked} onClick={props.onClick}>
            <MobileMenuItem />
            <MobileMenuItem />
            <MobileMenuItem />
        </MobileMenuButtonStyled>
    )
}


MobileMenuButton.propTypes = {
    clicked: PropTypes.bool,
    onClick: PropTypes.func,
}
