import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        active: [],
    },
    reducers: {
        addTodo(state,action){
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            })
        },
        removeTodo(state,action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodoComplete(state,action){
            const todoComplete = state.todos.find(todo => todo.id === action.payload)
            todoComplete.completed = !todoComplete.completed
        },
        removeCompleted(state){
            state.todos = state.todos.filter(todo => todo.completed !== true)
        }
    }
})

export const {addTodo, removeTodo, toggleTodoComplete,  removeCompleted} = todoSlice.actions;

export default todoSlice.reducer;