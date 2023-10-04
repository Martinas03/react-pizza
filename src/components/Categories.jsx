import React from "react";

function Categories({categories, categoryIndex, onClickCategory}) {

    return <div className="categories">
        <ul>
            {categories.map((el, index) => {
                return <li key={index} onClick={()=>onClickCategory(index)} className={categoryIndex === index? 'active' : ''}>{el.title}</li>
            })}
        </ul>
    </div>;
}

export default Categories