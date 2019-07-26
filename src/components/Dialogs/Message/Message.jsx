import React from 'react';
import style from './Message.module.css';

const Messages = (props) => {
    return (
        <div className={style.meassage}>{props.message}</div>
    )
};

export default Messages;