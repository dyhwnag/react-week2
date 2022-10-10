import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StProducts = styled.div`
    margin: 0 auto;
    width: 500px;
    height: 300px;
    border:1px solid #acacac;
`

const StTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`

const StBottom = styled.div`
    padding-left: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const StLink = styled.div`
    font-size: 13px;
    border: 1px solid #acacac;
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`

const Products = () => {
    const { todos } = useSelector((state) => state.todos)
    const { id } = useParams()
    const todo = todos.filter((todo) => todo.id === Number(id))[0]

    return (
        <StWrap>
            <StProducts>
                <StTop>
                    <div>id : {todo.id}</div>
                    <StLink><StyledLink to='/'>이전으로</StyledLink></StLink>
                </StTop>
                <StBottom>
                    <h2>{todo.title}</h2>
                    <p>{todo.body}</p>
                </StBottom>
            </StProducts>
        </StWrap>
    )
}
export default Products