// initial State
const initialState = {
    todos: [
        { id: 1, title: 'react를 배워보자', body: 'react', isDone: false },
        { id: 2, title: 'redux를 배워보자', body: 'redux', isDone: true }
    ]
}

// Action value
const ADD_TODO = 'ADD_TODO'

const DEL_TODO = 'DEL_TODO'

const TOGGLESTATUS_TODO = 'TOGGLESTATUS_TODO'


// Action Creator
export const addTodo = (payload) => {
    return { type: ADD_TODO, payload }
}

export const delTodo = (payload) => {
    return { type: DEL_TODO, payload }
}

export const toggleStatusTodo = (payload) => {
    return { type: TOGGLESTATUS_TODO, payload }
}



// Reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DEL_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((delList) => delList.id !== action.payload.id)]
            }
        case TOGGLESTATUS_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((changeList) => changeList.id !== action.payload.id), action.payload]
            }



        default:
            return state
    }
}

export default todos
