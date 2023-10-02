import React, {useEffect, useState} from "react";
import scss from './scss/app.scss'
import './App.css';
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Cort from "./components/pages/Cort";


function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path={'/'} element={<Home/> }/>
                            <Route path={'/cort'} element={<Cort/> }/>
                            <Route path={'*'} element={<NotFound/> }/>
                        </Routes>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
