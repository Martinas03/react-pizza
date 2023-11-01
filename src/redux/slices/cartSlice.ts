import {createSlice} from '@reduxjs/toolkit'
import {PizzaType} from "../../types";
import {RootState} from "../store";

interface CartSlice {
    totalPrice: number
    items: PizzaType[]
}

const initialState: CartSlice = {
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
                if(findItem.count) findItem.count++
            }

            state.totalPrice = state.items.reduce((price, obj) => {
                return  obj.count ? (obj.price * obj.count) + price : price
            }, 0)
        },

        minusItem: (state, action) => {
            const findItem = state.items.find(obj => obj.id === action.payload)

            if (findItem) {
                if(findItem.count) {
                findItem.count--
                }
            }
            state.totalPrice = state.items.reduce((price, obj) => {
                // if(obj.count) {
                    return obj.count ? (obj.price * obj.count) + price : price;
                // }
            }, 0)
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(obj => obj.id !== action.payload)
            state.totalPrice = 0
        },

        clearItem: (state ) => {
            state.items = []
        },
    },
})

export const cartSelector = (state: RootState) => state.cart
export const cartItemsSelector = (id: string) => (state: RootState) => state.cart.items.find(obj => obj.id === id)

export const {addItem, removeItem, clearItem, minusItem} = cartReducer.actions

export default cartReducer.reducer
