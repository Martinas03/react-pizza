import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    searchValue: '',
    sortValue: {property: 'rating', title: 'популярности'},
    currentPage: 1,
    categories: [
        {id: 1, title: 'Все'},
        {id: 2, title: 'Мясные'},
        {id: 3, title: 'Вегетарианская'},
        {id: 4, title: 'Гриль'},
        {id: 5, title: 'Острые'},
        {id: 6, title: 'Закрытые'}
    ],
    sortList: [
        {property: 'rating', title: 'популярности'},
        {property: '-rating', title: 'популярности(DESC)'},
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
            state.sortValue = action.payload.sort
            state.categoryId = Number(action.payload.categoryId)
            state.searchValue = action.payload.searchValue
            state.currentPage = Number(action.payload.currentPage)
            console.log(action.payload)
        },
        setSortValue: (state, action) => {
            state.sortValue = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
    },
})

export const filterSelector = (state) => state.filter

export const {setCategoryId, setSearchValue, setFilterParams, setSortValue, setCurrentPage} = counterReducer.actions

export default counterReducer.reducer