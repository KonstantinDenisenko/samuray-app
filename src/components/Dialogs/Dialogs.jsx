import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Messages from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map( (el, id) => {
        return  <DialogsItem name = {el.name} id = {el.id} key={id} />
    });

    let messageElements = props.dialogsPage.messages.map( (el, id) => {
        return  <Messages message = {el.message} key={id} />
    });

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (textArea) => {
        let text = textArea.target.value;
        props.updateNewMessageBody(text);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <div>
                    <textarea
                        placeholder='Enter your message'
                        value={props.dialogsPage.newMessageBody}
                        onChange={onNewMessageChange}
                    />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;