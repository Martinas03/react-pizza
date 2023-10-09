import React from "react";
import {useSelector} from "react-redux";

function Categories({ categoryIndex, onClickCategory}) {
    const filter = useSelector((state) => state.counter.value)
    const categories = useSelector((state) => state.counter.categories)

    return <div className="categories">
        <ul>
            {categories.map((el, index) => {
                return <li key={index} onClick={()=>onClickCategory(index)} className={filter === index? 'active' : ''}>{el.title}</li>
            })}
        </ul>
    </div>;
}

export default Categories