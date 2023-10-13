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
        // setCurrentPage: (state, action) => {
        //     state.currentPage = action.payload
        // },
        setFilterPageParams: (state, action) => {
            state.currentPage = action.payload.currentPage
            console.log(action.payload)
        },
    },
})

export const {setCurrentPage, setFilterPageParams} = paginationReducer.actions

export default paginationReducer.reducer