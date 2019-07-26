import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
console.log(props);
    let postsElements = props.profilePage.posts.map( (post) => {
        return <Post message = {post.message} like = {post.likesCount}/>
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return <div className={style.postsBlock}>
        <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}
                          value={props.profilePage.newPostText}
                          onChange={onPostChange}
                />
                <button onClick={addPost}>Add post</button>
            </div>
        <div className={style.posts}>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;