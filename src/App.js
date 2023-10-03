import React from "react";
import scss from './scss/app.scss'
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Cart from "./components/pages/Cart";


function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                        <Routes>
                            <Route path={'/'} element={<Home/> }/>
                            <Route path={'/cort'} element={<Cart/> }/>
                            <Route path={'*'} element={<NotFound/> }/>
                        </Routes>
                </div>
            </div>

        </div>
    );
}

export default App;
