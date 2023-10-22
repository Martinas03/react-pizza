import React from "react";
import {useSelector} from "react-redux";
import {filterSelector} from "../redux/slices/filterSlice";

function Categories({onClickCategory}) {
    const {categoryId, categories} = useSelector(filterSelector)

    return <div className="categories">
        <ul>
            {categories.map((el, index) => {
                return <li key={index} onClick={()=>onClickCategory(index)} className={categoryId === index? 'active' : ''}>{el.title}</li>
            })}
        </ul>
    </div>;
}

export default Categories