import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Messages from './Message/Message';
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((el, id) => {
        return <DialogsItem name={el.name} id={el.id} key={id}/>
    });

    let messageElements = props.dialogsPage.messages.map((el, id) => {
        return <Messages message={el.message} key={id}/>
    });

    let addNewMessage = (values) => {
        console.log(values.newMessageBody);
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <AddMessageForm onSubmit={addNewMessage} />

            </div>
        </div>
    )
};

export default Dialogs;