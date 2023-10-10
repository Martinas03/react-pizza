import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    searchValue: '',
    sortValue: {property: 'popularity', title: 'популярности'},
    categories: [
        {id: 1, title: 'Все'},
        {id: 2, title: 'Мясные'},
        {id: 3, title: 'Вегетарианская'},
        {id: 4, title: 'Гриль'},
        {id: 5, title: 'Острые'},
        {id: 6, title: 'Закрытые'}
    ],
    sortList: [
        {property: 'popularity', title: 'популярности'},
        {property: '-popularity', title: 'популярности(DESC)'},
        {property: 'price', title: 'цене'},
        {property: '-price', title: 'цене(DESC)'},
        {property: 'title', title: 'алфавиту'},
        {property: '-title', title: 'алфавиту(DESC)'}]
}

export const counterReducer = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setFilterParams: (state, action) => {
            // state.sortValue = action.payload.sortValue
            state.categoryId = Number(action.payload.categoryId)
            state.searchValue = action.payload.searchValue
        },
        setSortValue: (state, action) => {
            state.sortValue = action.payload
        },

    },
})

export const {setCategoryId, setSearchValue, setFilterParams, setSortValue} = counterReducer.actions

export default counterReducer.reducer