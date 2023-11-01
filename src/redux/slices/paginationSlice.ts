import {createSlice} from '@reduxjs/toolkit'
import {RootState} from "../store";

interface PaginationSlice {
    pizzasTotalCount: number
    pageCount: number
}

const initialState: PaginationSlice = {
    pizzasTotalCount: 10,
    pageCount: 4,
}

export const paginationReducer = createSlice({
    name: 'sort',
    initialState,
    reducers: {

    },
})

export const paginationSlice = (state: RootState) => state.pagination

export const {} = paginationReducer.actions

export default paginationReducer.reducer