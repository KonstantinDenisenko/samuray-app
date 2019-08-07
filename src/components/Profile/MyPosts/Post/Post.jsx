import React from 'react';
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.item}>
            <img alt="someInformation" src='https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F05%2Fbecome-venom-01.jpg?q=75&w=800&cbr=1&fit=max'/>
            {props.message}
            <div>
                <span>Like:</span>{props.like}
            </div>
        </div>
    )
};

export default Post;