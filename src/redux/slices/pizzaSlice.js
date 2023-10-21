import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzas', async (params) => {
        const {search, page, limit, category, sortBy, order} = params
        const {data} = await axios.get(`https://651a96bd340309952f0d8f19.mockapi.io/items?${search}&${page}&${limit}&${category}&${sortBy}&${order}`)
        return data
    }
)

const initialState = {
    pizzas: [],
    itemIndex: 0,
    sizeIndex: 0,
    pizzaStatus: ''
}

export const pizzaReducer = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
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
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.pizzas = []
            state.pizzaStatus = 'loading'
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.pizzas = action.payload
            state.pizzaStatus = 'success'
        },
        [fetchPizzas.rejected]: (state) => {
            state.pizzas = []
            state.pizzaStatus = 'error'
        }

    }
})

export const {setItemIndex, setSizeIndex, getPizzas} = pizzaReducer.actions

export default pizzaReducer.reducer