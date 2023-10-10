import React from 'react';
import s from './Search.module.scss'
import searchIcon from './../../assets/images/search.svg'

const Search = ({searchValue, setSearchValue}) => {

    return (
        <div className={s.wrapper}>
            <img src={searchIcon} alt="search" className={s.search}/>

            <input value={searchValue}
                   onChange={event => setSearchValue(event.currentTarget.value)}
                   type="search"
                   className={s.input}
                   placeholder={'search'}/>
        </div>
    );
};

export default Search;