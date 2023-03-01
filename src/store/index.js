import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'
import darkModeReducer from './darkModeSlice'

export default configureStore({
    reducer: {
        todos: todoReducer,
        darkMode: darkModeReducer,
    },
})