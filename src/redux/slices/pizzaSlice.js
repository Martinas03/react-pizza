import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    pizzas: [],
    itemIndex: 0,
    sizeIndex: 0,
}

export const pizzaReducer = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        // increment: (state) => {
        //
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        getPizzas: (state, action) => {
            state.pizzas = action.payload
        },
        setItemIndex: (state, action) => {
            state.itemIndex = action.payload
        },
        setSizeIndex: (state, action) => {
            state.sizeIndex = action.payload
        },

    },
})

export const {setItemIndex, setSizeIndex, getPizzas} = pizzaReducer.actions

export default pizzaReducer.reducer