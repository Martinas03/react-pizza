import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    categories: [
        {id: 1, title: 'Все'},
        {id: 2, title: 'Мясные'},
        {id: 3, title: 'Вегетарианская'},
        {id: 4, title: 'Гриль'},
        {id: 5, title: 'Острые'},
        {id: 6, title: 'Закрытые'}
    ]
}

export const counterReducer = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        increment: (state) => {

            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        setCategoryRedux: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { increment, decrement, setCategoryRedux } = counterReducer.actions

export default counterReducer.reducer