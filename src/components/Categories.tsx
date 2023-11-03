import React, {memo} from "react";
import {useSelector} from "react-redux";
import {filterSelector} from "../redux/slices/filterSlice";
import {CategoryType} from "../types";

type CategoriesPopsType = {
    onClickCategory: (index: number) => void
}

const Categories: React.FC<CategoriesPopsType> = memo(({onClickCategory}) => {
    const {categoryId, categories} = useSelector(filterSelector)
    return <div className="categories">
        <ul>
            {categories.map((el: CategoryType, index: number) => {
                return <li key={index} onClick={()=>onClickCategory(index)} className={categoryId === index? 'active' : ''}>{el.title}</li>
            })}
        </ul>
    </div>;
})

export default Categories