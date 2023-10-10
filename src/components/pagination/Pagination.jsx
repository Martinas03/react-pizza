import React from 'react';
import s from './Pagination.module.scss'
import {useSelector} from "react-redux";

const Pagination = ({onChangePage}) => {
    const {currentPage, pizzasTotalCount, pageCount} = useSelector((state) => state.pagination)

    // const pizzasTotalCount = 10
    // const pageCount = 4

    const totalPage = Math.ceil(pizzasTotalCount / pageCount)

    const pagesArray = Array(totalPage).fill(1).map((i, index) => index + 1)



    return (
        <div>
            <div>
                <button className={s.arrows} onClick={()=>onChangePage(currentPage-1)} disabled={currentPage === 1}>{'<<'}</button>
                {/*{index > 1 && <>*/}
                {/*    <button className={page === 1 ? s.navButton_focus : s.navButton} onClick={firstPage}>1</button>*/}
                {/*    <span>...</span>*/}
                {/*</>}*/}
                {pagesArray.map((pg, i) => {
                    // let iPlusOne = i + 1
                    // if (iPlusOne >= index && iPlusOne < (index + diapason)) {
                    return <button key={pg}
                                   className={currentPage === pg ? s.button : s.buttonOnFocus}
                                   onClick={() => onChangePage(pg)
                                   }>{pg}</button>
                    // } else {
                    //     return <></>
                    // }
                })}
                {/*{index + diapason < totalPage && <>*/}
                {/*    <span>...</span>*/}
                {/*    <button disabled={loading} className={page === totalPage ? s.navButton_focus : s.navButton} onClick={lastPage}>{totalPage}</button>*/}
                {/*</>}*/}
                <button className={s.arrows} onClick={()=>onChangePage(currentPage+1)} disabled={currentPage === 3}>{'>>'}</button>
            </div>
        </div>
    );
};

export default Pagination;