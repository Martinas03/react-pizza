import React, {createContext, useState} from "react";
import scss from './scss/app.scss'
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Cart from "./components/pages/Cart";
import PizzaInfo from "./components/PizzaInfo";
import Layout from "./components/Layout";

export const AppContext = createContext()

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/react-pizza'} element={<Layout/>}>
                    <Route path={''} element={<Home/>}/>
                    <Route path={'cart'} element={<Cart/>}/>
                    <Route path={'pizza/:id'} element={<PizzaInfo/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
