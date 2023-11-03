import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {PizzaCartType, PizzaType} from "../../types";
import {RootState} from "../store";
import {getCartPizzaLS} from "../../utils/getCartPizzasLS";
import {calculateTotalPrice} from "../../utils/culculateTotalPrice";

interface CartSlice {
    totalPrice: number
    items: PizzaCartType[]
}

const cartPizza = getCartPizzaLS()

const initialState: CartSlice = {
    totalPrice: cartPizza.totalPrice,
    items: cartPizza.items
}


export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<PizzaCartType>) => {
            const findItem = state.items.find(obj => obj.id === action.payload.id)

            if (!findItem) {
                state.items.push({...action.payload, count: 1})
            } else {
                if(findItem.count) findItem.count++
            }

            state.totalPrice = calculateTotalPrice(state)
        },

        minusItem: (state, action: PayloadAction<string> ) => {
            const findItem = state.items.find(obj => obj.id === action.payload)

            if (findItem) {
                if(findItem.count) {
                findItem.count--
                }
            }
            state.totalPrice = state.items.reduce((price, obj) => {
                // if(obj.count) {
                    return obj.count && obj.price ? (obj.price * obj.count) + price : price;
                // }
            }, 0)
        },

        removeItem: (state, action: PayloadAction<string>) => {
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
