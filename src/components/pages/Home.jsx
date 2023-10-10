import React, {useContext, useEffect, useState} from 'react';
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlockSkeleton from "../Skeletons/PizzaBlockSkeleton";
import PizzaBlock from "../PizzaBlock";
import './../../App.css';
import Pagination from "../pagination/Pagination";
import {AppContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../../redux/slices/filterSlice";
import axios from "axios";
import {getPizzas} from "../../redux/slices/pizzaSlice";
import {setCurrentPage} from "../../redux/slices/paginationSlice";

const Home = () => {

    const filter = useSelector((state) => state.counter.value)
    const sort = useSelector((state) => state.sort.sortValue)
    const pizzas = useSelector((state) => state.pizza.pizzas)
    const currentPage = useSelector((state) => state.pagination.currentPage)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true)
    // const [currentPage, setCurrentPage] = useState(1)

    const {searchValue} = useContext(AppContext)

    useEffect(() => {
        const category = filter > 0 ? `category=${filter.toString()}` : ''
        const search = searchValue ? `search=${searchValue}` : ''
        const sortBy = `sortBy=${sort.property.replace('-', '')}`
        const order = `order=${sort.property.includes('-') ? 'desc' : 'asc'}`
        const limit = `limit=4`
        const page = `page=${currentPage}`
        setIsLoading(true)
        axios.get(`https://651a96bd340309952f0d8f19.mockapi.io/items?${search}&${page}&${limit}&${category}&${sortBy}&${order}`)
            .then(res => {
                dispatch(getPizzas(res.data))
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [filter, sort, searchValue, currentPage])

    const onClickCategory = (index) => {
        // setCategoryIndex(index)
        dispatch(setCategoryId(index))
    }

    const onChangePage = (page) => {
        dispatch(setCurrentPage(page))
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
                    />

                })}
            </div>
            <Pagination onChangePage={onChangePage}/>
        </div>
    );
};

export default Home;