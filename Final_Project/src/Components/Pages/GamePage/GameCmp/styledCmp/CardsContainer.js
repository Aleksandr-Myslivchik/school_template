import styled from "styled-components";

export const CardsContainer = styled.div`

display: flex;
margin: auto;
flex-wrap: wrap;
width: 70vw;
max-width: ${({ fieldSize }) => {
        if (fieldSize === 'animals') return 330
        else  return 550

    }}px;
align-items: center;
justify-content: center;
align-content: center;

`

