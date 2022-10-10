# react-week2

## 컴포넌트 설명

- Header Component : 상단 Header를 표현하는 컴포넌트
- Form Component : 제목/내용을 입력하는 컴포넌트이고 reducer로 id, title, body, isDone을 전달(id는 최대값 활용)
- Todo Component : List Component와 Todo Component를 나눠서 표현하려 했지만 useSelector로 전역 데이터 todos를 받아와서 분리 없이 처리함
- TodoList Component : Header, Form, Todo Component를 모아서 Router로 전달 후 App으로 전달
