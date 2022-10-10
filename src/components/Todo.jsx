import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleStatusTodo, delTodo } from '../redux/modules/todos'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`
const StTodo = styled.div`
  width: 380px;
  height: 250px;
  border:3px solid #0084ff;
  border-radius: 10px;
  margin-right: 13px;
  margin-bottom: 13px;
  `

const StBtnWrap = styled.div`
  width: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StButton1 = styled.button`
  border:1px solid #b40000;
  width: 150px;
  height: 50px;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
`

const StButton2 = styled.button`
  border:1px solid #0c9200;
  width: 150px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
`
const StTextWrap = styled.div`
    margin-left: 35px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #636363;
`

const Todo = () => {

  const { todos } = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <div>
      <div><h2>Working🔥🔥🔥</h2></div>
      <StContainer>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <StTodo key={todo.id}>
                <StTextWrap >
                  <StyledLink to={`/products/${todo.id}`}><p>상세보기</p></StyledLink>
                  <h1>{todo.title}</h1>
                  <p>{todo.body}</p>
                </StTextWrap>
                <StBtnWrap>
                  <StButton1 onClick={() => {
                    dispatch(delTodo(todo))
                  }}>삭제</StButton1>
                  <StButton2 onClick={() => {
                    todo.isDone = !todo.isDone
                    dispatch(toggleStatusTodo(todo))
                  }}>{!todo.isDone ? '완료' : '취소'}</StButton2>
                </StBtnWrap>
              </StTodo>
            )
          } else {
            return null
          }
        })}
      </StContainer>
      <div><h2>Done🎉🎉🎉</h2></div>
      <StContainer>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodo key={todo.id}>
                <StTextWrap>
                  <StyledLink to={`/products/${todo.id}`}><p>상세보기</p></StyledLink>
                  <h1>{todo.title}</h1>
                  <p>{todo.body}</p>
                </StTextWrap>
                <StBtnWrap>
                  <StButton1 onClick={() => {
                    dispatch(delTodo(todo))
                  }}>삭제</StButton1>
                  <StButton2 onClick={() => {
                    todo.isDone = !todo.isDone
                    dispatch(toggleStatusTodo(todo))
                  }}>{todo.isDone ? '취소' : '완료'}</StButton2>
                </StBtnWrap>
              </StTodo>
            )
          } else {
            return null
          }
        })}
      </StContainer>
    </div>
  )
}
export default Todo
