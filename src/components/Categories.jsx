import React from "react";
import {useSelector} from "react-redux";

function Categories({onClickCategory}) {
    const {categoryId, categories} = useSelector((state) => state.filter)

    return <div className="categories">
        <ul>
            {categories.map((el, index) => {
                return <li key={index} onClick={()=>onClickCategory(index)} className={categoryId === index? 'active' : ''}>{el.title}</li>
            })}
        </ul>
    </div>;
}

export default Categories