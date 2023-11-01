import React, {ChangeEvent, useCallback, useState} from 'react';
import s from './Search.module.scss'
import searchIcon from './../../assets/images/search.svg'
import debounce from "lodash.debounce";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../redux/slices/filterSlice";


const Search = () => {
    const dispatch = useDispatch()

    const [value, setValue] = useState<string>('')

    const testDebounce = useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str))
        }, 1500),
        [])


    const onclick = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
        testDebounce(event.currentTarget.value)
    }

    return (
        <div className={s.wrapper}>
            <img src={searchIcon} alt="search" className={s.search}/>

            <input value={value}
                   onChange={onclick}
                   type="search"
                   className={s.input}
                   placeholder={'search'}/>
        </div>
    );
};

export default Search;