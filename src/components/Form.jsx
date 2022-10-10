import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/modules/todos'
import styled from 'styled-components'

const StFormContainer = styled.div`
  font-size:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
`

const StButton = styled.button`
  font-size: 17px;
  color: white;
  border: none;
  background-color: #0084ff;
  height: 40px;
  cursor: pointer;
  width: 120px;
  border-radius: 20px;
`

const StInput = styled.input`
  font-size: 20px;
  border: 1px solid #0084ff;
  background-color: #ffffff;
  margin: 0 24px;
  height: 40px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`

const Form = () => {
  
    const [inputTitle, setInputTitle] = useState('')
    const [inputBody, setInputBody] = useState('')

    const todos = useSelector((state) => state.todos.todos)

    const dispatch = useDispatch()

    const onSubmitHandler = () => {
        if (inputTitle === "") return;

        let maxId = todos.reduce((pre, cur) => {
            return pre > cur.id ? pre : cur.id
        }, 0)

        dispatch(addTodo(
            {
                id: maxId + 1,
                title: inputTitle,
                body: inputBody,
                isDone: false
            })
        )
        setInputTitle('')
        setInputBody('')
    }

    return (
        <StFormContainer>
            <p>제목</p>
            <StInput type='text' value={inputTitle} onChange={(e) => {
                setInputTitle(e.target.value)
            }} />
            <p>내용</p>
            <StInput type='text' value={inputBody} onChange={(e) => {
                setInputBody(e.target.value)
            }} />
            <StButton onClick={onSubmitHandler}> 추가하기</StButton>
        </StFormContainer>
    )
}

export default Form

