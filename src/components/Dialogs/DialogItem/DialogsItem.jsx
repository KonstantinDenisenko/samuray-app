import React from 'react';
import style from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={`${style.dialog} ${style.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};
export default DialogsItem;