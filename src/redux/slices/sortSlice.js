import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    // sortValue: {property: 'popularity', title: 'популярности'},
    // sortList: [
    //     {property: 'popularity', title: 'популярности'},
    //     {property: '-popularity', title: 'популярности(DESC)'},
    //     {property: 'price', title: 'цене'},
    //     {property: '-price', title: 'цене(DESC)'},
    //     {property: 'title', title: 'алфавиту'},
    //     {property: '-title', title: 'алфавиту(DESC)'}]
}

export const sortReducer = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        // increment: (state) => {
        //
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // setSortValue: (state, action) => {
        //     state.sortValue = action.payload
        // },
        // setFilterSortParams: (state, action) => {
        //     state.sortValue = action.payload.sortValue
        // },

    },
})

export const {setFilterSortParams} = sortReducer.actions

export default sortReducer.reducer