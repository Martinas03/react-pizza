import React, {useState} from "react";
import scss from './scss/app.scss'
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Cart from "./components/pages/Cart";


function App() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className="App">
            <div className="wrapper">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <div className="content">
                        <Routes>
                            <Route path={'/'} element={<Home searchValue={searchValue} setSearchValue={setSearchValue}/> }/>
                            <Route path={'/cort'} element={<Cart/> }/>
                            <Route path={'*'} element={<NotFound/> }/>
                        </Routes>
                </div>
            </div>

        </div>
    );
}

export default App;
