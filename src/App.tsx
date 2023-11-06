import React, {Suspense} from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import Layout from "./components/Layout";

// import scss from './scss/app.scss'


const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ "./components/pages/Cart"));
const PizzaInfo = React.lazy(() => import(/* webpackChunkName: "PizzaInfo" */ "./components/PizzaInfo"));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ "./components/pages/NotFound"));


function App() {

    return (
        <div className={'App'}>
            <Routes>
                <Route path={'/react-pizza'} element={<Layout/>}>
                    <Route path={''} element={<Home/>}/>
                    <Route path={'cart'} element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Cart/>
                        </Suspense>}/>
                    <Route path={'pizza/:id'} element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <PizzaInfo/>
                        </Suspense>}/>
                    <Route path={'*'} element={
                        <Suspense fallback={<div>Loading...</div>}>
                        <NotFound/>
                        </Suspense>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
