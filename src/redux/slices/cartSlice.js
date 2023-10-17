import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: []
}

export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.filter(obj => obj.id !== action.payload)

        },
        clearItem: (state, action) => {
            state.items = []
        },
    },
})

export const {addItem, removeItem, clearItem} = cartReducer.actions

export default cartReducer.reducer