import React, {useEffect, useState} from 'react';
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlockSkeleton from "../Skeletons/PizzaBlockSkeleton";
import PizzaBlock from "../PizzaBlock";
import './../../App.css';

const Home = ({searchValue, setSearchValue}) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryIndex, setCategoryIndex] = useState(0)
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const [selected, setSelected] = useState({property: 'popularity',  title:'популярности'})
    // const [searchValue, setSearchValue] = useState('')

    const categories = [
        {id: 1, title: 'Все'},
        {id: 2, title: 'Мясные'},
        {id: 3, title: 'Вегетарианская'},
        {id: 4, title: 'Гриль'},
        {id: 5, title: 'Острые'},
        {id: 6, title: 'Закрытые'}
    ]



    useEffect(() => {
        const category = categoryIndex > 0 ? categoryIndex.toString(): ''
        const sortBy = selected.property.replace('-', '')
        const order = selected.property.includes('-') ? 'desc' : 'asc'
        setIsLoading(true)
        fetch(`https://651a96bd340309952f0d8f19.mockapi.io/items?&category=${category}&sortBy=${sortBy}&order=${order}` )
            .then(res => {
                return res.json()
            })
            .then((arr) => {
                console.log(selected.property)
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryIndex, selected])

    const onClickCategory = (index) => {
        setCategoryIndex(index)
    }

    // const onChangeSearchValue = (e) => {
    //     setSearchValue(e.currentTarget.value)
    //     console.log(e)
    // }


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    categories={categories}
                    categoryIndex={categoryIndex}
                    onClickCategory={onClickCategory}
                />
                <Sort
                    sortValue={selected}
                    onClickSort={setSelected}
                    isOpenPopup={isOpenPopup}
                    setIsOpenPopup={setIsOpenPopup}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(6)].map((item, i) => {
                    return <PizzaBlockSkeleton key={i}/>
                }) : items.filter(pizza => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))
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
        </div>
    );
};

export default Home;