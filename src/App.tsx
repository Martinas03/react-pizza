import React, {Suspense} from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import Layout from "./components/Layout";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ "./components/pages/Cart")
    .then(module => ({ default: module.Cart })));
const PizzaInfo = React.lazy(() => import(/* webpackChunkName: "PizzaInfo" */ "./components/PizzaInfo")
    .then(module => ({ default: module.PizzaInfo })));
const NotFound = React.lazy(() => import("./components/pages/NotFound")
    .then(module => ({ default: module.NotFound })));

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
