import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    pizzasTotalCount: 10,
    pageCount: 4,
}

export const paginationReducer = createSlice({
    name: 'sort',
    initialState,
    reducers: {

    },
})

export const paginationSlice = (state) => state.pagination

export const {} = paginationReducer.actions

export default paginationReducer.reducer