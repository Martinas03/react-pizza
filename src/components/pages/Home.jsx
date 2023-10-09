import React, {useContext, useEffect, useState} from 'react';
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlockSkeleton from "../Skeletons/PizzaBlockSkeleton";
import PizzaBlock from "../PizzaBlock";
import './../../App.css';
import Pagination from "../pagination/Pagination";
import {AppContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryRedux} from "../../redux/slices/filterSlice";

const Home = () => {

    const filter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const [selected, setSelected] = useState({property: 'popularity',  title:'популярности'})
    const [currentPage, setCurrentPage] = useState(1)

    const {searchValue} = useContext(AppContext)

    useEffect(() => {
        const category = filter > 0 ? `category=${filter.toString()}`: ''
        const search = searchValue ? `search=${searchValue}`: ''
        const sortBy = `sortBy=${selected.property.replace('-', '')}`
        const order = `order=${selected.property.includes('-') ? 'desc' : 'asc'}`
        const limit = `limit=4`
        const page = `page=${currentPage}`
        setIsLoading(true)
        fetch(`https://651a96bd340309952f0d8f19.mockapi.io/items?${search}&${page}&${limit}&${category}&${sortBy}&${order}` )
            .then(res => {
                return res.json()
            })
            .then((arr) => {
                console.log(selected.property)
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [filter, selected, searchValue, currentPage])

    const onClickCategory = (index) => {
        // setCategoryIndex(index)
        dispatch(setCategoryRedux(index))
    }

   const onChangePage = (page) => {
        setCurrentPage(page)
   }

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickCategory={onClickCategory}/>
                <Sort
                    sortValue={selected}
                    onClickSort={setSelected}
                    isOpenPopup={isOpenPopup}
                    setIsOpenPopup={setIsOpenPopup}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(3)].map((item, i) => {
                    return <PizzaBlockSkeleton key={i}/>
                }) : items
                    // .filter(pizza => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map(obj => {
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
            <Pagination items={items} onChangePage={onChangePage} currentPage={currentPage}/>
        </div>
    );
};

export default Home;