import React, {useEffect} from 'react';
import s from './Pagination.module.scss'
import {useSelector} from "react-redux";
import {paginationSlice} from "../../redux/slices/paginationSlice";
import {filterSelector} from "../../redux/slices/filterSlice";

const Pagination = ({onChangePage}) => {
    const {pizzasTotalCount, pageCount} = useSelector(paginationSlice)
    const {currentPage} = useSelector(filterSelector)

    const totalPage = Math.ceil(pizzasTotalCount / pageCount)

    const pagesArray = Array(totalPage).fill(1).map((i, index) => index + 1)

    useEffect(() => {
        console.log(currentPage)
    }, [currentPage])


    return (
        <div>
            <div>
                <button className={s.arrows} onClick={() => onChangePage(currentPage - 1)}
                        disabled={currentPage === 1}>{'<<'}</button>
                {pagesArray.map((pg, i) => {
                    return <button key={pg}
                                   className={currentPage === pg ? s.button : s.buttonOnFocus}
                                   onClick={() => onChangePage(pg)
                                   }>{pg}</button>
                })}
                <button className={s.arrows} onClick={() => onChangePage(currentPage + 1)}
                        disabled={currentPage === 3}>{'>>'}</button>
            </div>
        </div>
    );
};

export default Pagination;