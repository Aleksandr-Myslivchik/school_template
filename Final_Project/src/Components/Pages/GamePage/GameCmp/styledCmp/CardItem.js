import styled from "styled-components";
import PropTypes from 'prop-types'


export const CardItem = styled.div`

    flex: 0 1 ${props => props.cellSize}%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    margin: 1px;


`

CardItem.propTypes = {
    cellSize: PropTypes.number
}