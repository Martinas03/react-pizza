import React, {useState} from "react";

function Categories() {
    const [categoryIndex, setCategoryIndex] = useState(0)
    const onClickActive = (index) => {
        setCategoryIndex(index)
    }

    const categories = [
        {id: 1, title: 'Все'},
        {id: 2, title: 'Мясные'},
        {id: 3, title: 'Вегетарианская'},
        {id: 4, title: 'Гриль'},
        {id: 5, title: 'Острые'},
        {id: 6, title: 'Закрытые'}
    ]
    return <div className="categories">
        <ul>
            {categories.map((el, index) => {
                return <li key={el.id} onClick={()=>onClickActive(index)} className={categoryIndex === index? 'active' : ''}>{el.title}</li>
            })}
        </ul>
    </div>;
}

export default Categories