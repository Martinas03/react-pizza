import React from 'react';
import s from './Search.module.scss'
import clear from './../../assets/images/clear.svg'
import searchIcon from './../../assets/images/search.svg'
import clearIcon from './../../assets/images/clear.svg'

const Search = ({searchValue, setSearchValue}) => {
    const onChangeSearchValue = (e) => {
        setSearchValue(e.currentTarget.value)
        console.log(e)
    }
    return (
        <div className={s.wrapper}>
            <img src={searchIcon} alt="search" className={s.search}/>

            <input value={searchValue}
                   onChange={event => setSearchValue(event.currentTarget.value)}
                   type="search"
                   className={s.input}
                   placeholder={'search'}/>
            {/*<img src={clearIcon} alt="search" className={s.clear}/>*/}
        </div>
    );
};

export default Search;