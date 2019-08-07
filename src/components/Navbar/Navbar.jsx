import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div className={style.nav}>
        <div className={style.item}>
            <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/dialogs' activeClassName={style.active}>Message</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/users' activeClassName={style.active}>Users</NavLink>
        </div>
        <div className={style.item}>
            <a href='/news'>News</a>
        </div>
        <div className={style.item}>
            <a href='/music'>Music</a>
        </div>
        <div className={style.item}>
            <a href='/settings'>Settings</a>
        </div>
    </div>
};

export default Navbar;