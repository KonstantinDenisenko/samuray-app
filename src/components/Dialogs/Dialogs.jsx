import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Messages from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( (el) => {
        return  <DialogsItem name = {el.name} id = {el.id}/>
    });

    let messageElements = props.state.messages.map( (el) => {
        return  <Messages message = {el.message}/>
    });

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs;