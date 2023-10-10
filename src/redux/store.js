import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/filterSlice";
import sortReducer from "./slices/sortSlice";
import pizzaReducer from "./slices/pizzaSlice";
import paginationReducer from "./slices/paginationSlice";


export const store = configureStore({
    reducer: {
        filter: counterReducer,
        sort: sortReducer,
        pizza: pizzaReducer,
        pagination: paginationReducer
    },
})

