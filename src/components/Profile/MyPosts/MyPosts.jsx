import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map( (post) => {
        return <Post message = {post.message} like = {post.likesCount}/>
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return <div className={style.postsBlock}>
        <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
        <div className={style.posts}>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;