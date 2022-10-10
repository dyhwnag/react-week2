import React from 'react'
import Form from './Form'
import Todo from './Todo'
import Header from './Header'
import styled from 'styled-components'

const StContainer = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
`

const TodoList = () => {
    return (
        <StContainer>
            <Header />
            <Form />
            <Todo />
        </StContainer>
    )
}

export default TodoList