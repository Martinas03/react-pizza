import React, {useEffect, useRef, useState} from 'react';
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlockSkeleton from "../Skeletons/PizzaBlockSkeleton";
import PizzaBlock from "../PizzaBlock";
import './../../App.css';
import Pagination from "../pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {filterSelector, setCategoryId, setCurrentPage, setFilterParams} from "../../redux/slices/filterSlice";
import qs from 'qs'
import {useNavigate} from 'react-router-dom'
import {addItem} from "../../redux/slices/cartSlice";
import {fetchPizzas, pizzaSelector} from "../../redux/slices/pizzaSlice";

const Home = () => {
    const isMounted = useRef(false)
    const isSearch = useRef(false)
    const {categoryId, searchValue, sortValue, currentPage, sortList} = useSelector(filterSelector)
    const {pizzas, pizzaStatus} = useSelector(pizzaSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getPizzas = () => {
        const category = categoryId > 0 ? `category=${categoryId.toString()}` : ''
        const search = searchValue ? `search=${searchValue}` : ''
        const sortBy = `sortBy=${sortValue.property.replace('-', '')}`
        const order = `order=${sortValue.property.includes('-') ? 'desc' : 'asc'}`
        const limit = `limit=4`
        const page = `page=${currentPage}`

        dispatch(fetchPizzas({category, search, sortBy, order, limit, page}))
        window.scrollTo(0, 0)
    }


    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = sortList.find(obj => obj.property === params.sort)
            dispatch(setFilterParams({...params, sort}))
            isSearch.current = true
        }
    }, [])

    useEffect(() => {
        if (!isSearch.current) {
            getPizzas()
        }
        isSearch.current = false
        window.scrollTo(0, 0)
    }, [categoryId, sortValue, searchValue, currentPage])

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sort: sortValue.property,
                categoryId,
                searchValue,
                currentPage
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true

    }, [categoryId, sortValue, searchValue, currentPage])

    const onClickCategory = (index) => {
        // setCategoryIndex(index)
        dispatch(setCategoryId(index))
    }

    const onChangePage = (page) => {
        dispatch(setCurrentPage(page))
    }

    const onAddItem = (count, setCount, item) => {
        dispatch(addItem(item))
        setCount(count + 1)
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickCategory={onClickCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzaStatus === 'loading' ? [...new Array(3)].map((item, i) => {
                    return <PizzaBlockSkeleton key={i}/>
                }) : pizzaStatus === 'success' ? pizzas.map(obj => {
                    return <PizzaBlock
                        key={obj.id}
                        obj={obj}
                        title={obj.title}
                        image={obj.imageUrl}
                        price={obj.price}
                        type={obj.types}
                        size={obj.sizes}
                        id={obj.id}
                        onAddItem={onAddItem}
                    />

                }) : <h2>Пиццы не найдены</h2>}
            </div>
            <Pagination onChangePage={onChangePage}/>
        </div>
    );
};

export default Home;