import React, {useEffect, useRef, useState} from 'react';
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlockSkeleton from "../Skeletons/PizzaBlockSkeleton";
import PizzaBlock from "../PizzaBlock";
import scss from './../../scss/app.scss'
import './../../App.css';
import Pagination from "../pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {filterSelector, setCategoryId, setCurrentPage, setFilterParams} from "../../redux/slices/filterSlice";
import qs from 'qs'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {addItem} from "../../redux/slices/cartSlice";
import {fetchPizzas, pizzaSelector, Status} from "../../redux/slices/pizzaSlice";
import {PizzaType, SortValueType} from "../../types";
import {useAppDispatch} from "../../redux/store";

const Home: React.FC = () => {
    const isMounted = useRef(false)
    const isSearch = useRef(false)
    const {categoryId, searchValue, sortValue, currentPage, sortList} = useSelector(filterSelector)
    const {pizzas, pizzaStatus} = useSelector(pizzaSelector)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const urlParams = useParams()

    const getPizzas = () => {
        const category = categoryId > 0 ? `category=${categoryId.toString()}` : ''
        const search = searchValue ? `search=${searchValue}` : ''
        const sortBy = `sortBy=${sortValue.property.replace('-', '')}`
        const order = `order=${sortValue.property.includes('-') ? 'desc' : 'asc'}`
        const limit = `limit=4`
        const page = `page=${currentPage}`

        dispatch(
            fetchPizzas(
            {category, search, sortBy, order, limit, page}))
        window.scrollTo(0, 0)
    }


    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = sortList.find((obj: SortValueType) => obj.property === params.sort)
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
        console.log(urlParams)
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

    const onClickCategory = (index: number) => {
        // setCategoryIndex(index)
        dispatch(setCategoryId(index))
    }

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }


    return (
        <div className={scss}>
            <div className="container">
                <div className="content__top">

                    <Categories onClickCategory={onClickCategory}/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {pizzaStatus === Status.LOADING ? [...new Array(3)].map((item, i) => {
                        return <PizzaBlockSkeleton key={i}/>
                    }) : pizzaStatus === Status.SUCCESS ? pizzas.map((obj: PizzaType) => {
                        return <PizzaBlock
                            key={obj.id}
                            title={obj.title}
                            image={obj.imageUrl}
                            price={obj.price}
                            type={obj.types}
                            size={obj.sizes}
                            id={obj.id}
                        />

                    }) : <h2>Пиццы не найдены</h2>}
                </div>
                <Pagination onChangePage={onChangePage}/>
            </div>
        </div>



    );
};

export default Home;