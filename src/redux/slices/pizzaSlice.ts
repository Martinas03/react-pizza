import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {PizzaCartType, PizzaType} from "../../types";
import {RootState} from "../store";

export const fetchPizzas = createAsyncThunk<PizzaType[], Record<string, string>>('pizzas/fetchPizzas', async (params) => {
        const {search, page, limit, category, sortBy, order} = params
        const {data} = await axios.get<PizzaType[]>(`https://651a96bd340309952f0d8f19.mockapi.io/items?${search}&${page}&${limit}&${category}&${sortBy}&${order}`)
        return data
    }
)

interface PizzaFilter {
    pizzas: PizzaType[],
    itemIndex: number,
    sizeIndex: number,
    pizzaStatus: 'loading' | 'success' | 'error'
}

const initialState: PizzaFilter = {
    pizzas: [],
    itemIndex: 0,
    sizeIndex: 0,
    pizzaStatus: 'loading'
}

export const pizzaReducer = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        getPizzas: (state, action: PayloadAction<PizzaType[]>) => {
            state.pizzas = action.payload
        },
        setItemIndex: (state, action: PayloadAction<number>) => {
            state.itemIndex = action.payload
        },
        setSizeIndex: (state, action: PayloadAction<number>) => {
            state.sizeIndex = action.payload
        },

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.pizzas = []
                state.pizzaStatus = 'loading'
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.pizzas = action.payload
                state.pizzaStatus = 'success'
            })
            .addCase(fetchPizzas.rejected, state => {
                state.pizzas = []
                state.pizzaStatus = 'error'
            })
    }
})

export const pizzaSelector = (state: RootState) => state.pizza

export const {setItemIndex, setSizeIndex, getPizzas} = pizzaReducer.actions

export default pizzaReducer.reducer