import React from 'react';
import s from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div className={s.container}>
            <div className={s.emoji}>😒</div>
            <h1>Ничего не найдено</h1>
        </div>
    );
};

export default NotFoundBlock;