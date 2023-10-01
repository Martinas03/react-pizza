import logo from './logo.svg';
import React from "react";
import './App.css';
import scss from './scss/app.scss'
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import pizzas from './assets/data/pizzas.json'


function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories/>
                            <Sort/>
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {pizzas.map(obj => {
                                return <div key={obj.id}><PizzaBlock
                                    title={obj.title}
                                    image={obj.imageUrl}
                                    price={obj.price}
                                    type={obj.types}
                                    size={obj.sizes}
                                /></div>
                            })}


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
