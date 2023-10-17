import React, {useEffect, useRef, useState} from 'react';
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlockSkeleton from "../Skeletons/PizzaBlockSkeleton";
import PizzaBlock from "../PizzaBlock";
import './../../App.css';
import Pagination from "../pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId, setCurrentPage, setFilterParams} from "../../redux/slices/filterSlice";
import axios from "axios";
import {getPizzas} from "../../redux/slices/pizzaSlice";
import qs from 'qs'
import {useNavigate} from 'react-router-dom'
import {addItem} from "../../redux/slices/cartSlice";

const Home = () => {
    const isMounted = useRef(false)
    const isSearch = useRef(false)
    const {categoryId, searchValue, sortValue, currentPage} = useSelector((state) => state.filter)
    const sortList = useSelector((state) => state.filter.sortList)
    const pizzas = useSelector((state) => state.pizza.pizzas)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true)
    const [count, setCount] = useState(0)

    const navigate = useNavigate()

    const fetchPizzas = () => {

        setIsLoading(true)
        const category = categoryId > 0 ? `category=${categoryId.toString()}` : ''
        const search = searchValue ? `search=${searchValue}` : ''
        const sortBy = `sortBy=${sortValue.property.replace('-', '')}`
        const order = `order=${sortValue.property.includes('-') ? 'desc' : 'asc'}`
        const limit = `limit=4`
        const page = `page=${currentPage}`

        axios.get(`https://651a96bd340309952f0d8f19.mockapi.io/items?${search}&${page}&${limit}&${category}&${sortBy}&${order}`)
            .then(res => {
                dispatch(getPizzas(res.data))
                setIsLoading(false)
            })
    }


    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = sortList.find(obj => obj.property === params.sort)
            console.log(params.currentPage)

            dispatch(setFilterParams({...params, sort}))
            isSearch.current = true
        }
    }, [])

    useEffect(() => {
        if (!isSearch.current) {
            fetchPizzas()
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
                {isLoading ? [...new Array(3)].map((item, i) => {
                    return <PizzaBlockSkeleton key={i}/>
                }) : pizzas.map(obj => {
                    return <PizzaBlock
                        key={obj.id}
                        title={obj.title}
                        image={obj.imageUrl}
                        price={obj.price}
                        type={obj.types}
                        size={obj.sizes}
                        count={count}
                        onAddItem={()=>onAddItem(count, setCount, obj)}
                    />

                })}
            </div>
            <Pagination onChangePage={onChangePage}/>
        </div>
    );
};

export default Home;