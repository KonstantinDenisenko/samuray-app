import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map( (post, id) => {
        return <Post message = {post.message} like = {post.likesCount} key={id}/>
    });

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = (textarea) => {
        props.updateNewPostText( textarea.target.value );
    };

    return <div className={style.postsBlock}>
        <h3>My posts</h3>
            <div>
                <textarea
                    onChange={onPostChange}
                    value={props.newPostText}
                />
                <button onClick={addPost}>Add post</button>
            </div>
        <div className={style.posts}>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;