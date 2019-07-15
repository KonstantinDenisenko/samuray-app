import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return <header className={style.header}>
        <img className={style.imgHeader} src="https://pbs.twimg.com/profile_images/378800000017423279/1a6d6f295da9f97bb576ff486ed81389_400x400.png"/>
    </header>
};

export default Header;