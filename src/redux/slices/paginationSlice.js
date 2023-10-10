import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentPage: 1,
    pizzasTotalCount: 10,
    pageCount: 4,
}

export const paginationReducer = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
    },
})

export const {setCurrentPage} = paginationReducer.actions

export default paginationReducer.reducer