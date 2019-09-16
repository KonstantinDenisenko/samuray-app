import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img className={style.imgHeader} alt="someInformation"
                 src="https://pbs.twimg.com/profile_images/378800000017423279/1a6d6f295da9f97bb576ff486ed81389_400x400.png"/>
            <div className={style.loginBlock}>
                {props.login
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;