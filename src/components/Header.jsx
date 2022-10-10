import React from 'react'
import styled from 'styled-components'

const StContainer = styled.div`
    display: flex;
    border:1px solid #cacaca;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    display: flex;
    color:#2f9bff;
`
const StText = styled.div`
    font-size: 30px;
    margin: 0 10px 0 10px;
`

const Header = () => {
    return (
        <StContainer>
            <StText>My Todo List</StText>
            <StText>React</StText>
        </StContainer>

    )
}

export default Header