import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/filterSlice";
import sortReducer from "./slices/sortSlice";
import pizzaReducer from "./slices/pizzaSlice";
import paginationReducer from "./slices/paginationSlice";
import cartReducer from "./slices/cartSlice";
import {useDispatch} from "react-redux";


export const store = configureStore({
    reducer: {
        filter: counterReducer,
        sort: sortReducer,
        pizza: pizzaReducer,
        pagination: paginationReducer,
        cart: cartReducer
    },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>

