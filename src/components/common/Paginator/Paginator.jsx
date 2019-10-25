import React from 'react';
import style from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let a = 1; a <= pageCount; a++) {
        pages.push(a);
    }

    return (
        <div className={style.currentPages}>
            {pages.map((num, id) => {
                return <span
                    key={id}
                    className={currentPage === num ? style.selectPage : ''}
                    onClick={() => {
                        onPageChanged(num)
                    }}>{num}</span>
            })}
        </div>
    )
};

export default Paginator;