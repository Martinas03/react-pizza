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
            const findItem = state.items.find(obj => obj.id === action.payload.id)

            if (!findItem) {
                state.items.push({...action.payload, count: 1})
            } else {
                findItem.count++
            }

            state.totalPrice = state.items.reduce((price, obj) => {
                return (obj.price * obj.count) + price
            }, 0)
        },

        minusItem: (state, action) => {
            const findItem = state.items.find(obj => obj.id === action.payload)

            if (findItem) {
                findItem.count--
            }
            state.totalPrice = state.items.reduce((price, obj) => {
                return (obj.price * obj.count) + price
            }, 0)
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(obj => obj.id !== action.payload)
            state.totalPrice = 0
        },

        clearItem: (state, action) => {
            state.items = []
        },
    },
})

export const cartSelector = (state) => state.cart
export const cartItemsSelector = (id) => (state) => state.cart.items.find(obj => obj.id === id)

export const {addItem, removeItem, clearItem, minusItem} = cartReducer.actions

export default cartReducer.reducer

export class setTotalPrice {
}