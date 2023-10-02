import React, {useEffect, useState} from 'react';
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlockSkeleton from "../Skeletons/PizzaBlockSkeleton";
import PizzaBlock from "../PizzaBlock";

const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://651a96bd340309952f0d8f19.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then((arr) => {
                console.log(arr)
                setItems(arr)
                setIsLoading(false)
            })
    }, [])
    return (
        <div>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(6)].map((item, i) => {
                    return <PizzaBlockSkeleton key={i}/>
                }) : items.map(obj => {
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