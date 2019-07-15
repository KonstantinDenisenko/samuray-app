import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Messages from './Message/Message';

let dialogs = [
    { id: '1', name: 'Konstantin'},
    { id: '2', name: 'Richard'},
    { id: '3', name: 'Bob'},
    { id: '4', name: 'Miha'},
    { id: '5', name: 'Medved'}
];

let messages = [
    {message: 'Hello'},
    {message: 'How are you?'},
    {message: "I'am fine)"}
];

let dialogsElements = dialogs.map( (el) => {
    return  <DialogsItem name = {el.name} id = {el.id}/>
});

let messageElements = messages.map( (el) => {
    return  <Messages message = {el.message}/>
});

const Dialogs = () => {
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