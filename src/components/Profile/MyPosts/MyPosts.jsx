import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxlength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name="newPostText"
                placeholder='Enter your message'
                validate={[required, maxlength10]}
            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};
const AddMessageFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map( (post, id) => {
        return <Post message = {post.message} like = {post.likesCount} key={id}/>
    });

    let onAddPost = (newPostText) => {
        props.addPost(newPostText.newPostText);
    };

    return <div className={style.postsBlock}>
        <h3>My posts</h3>
        <AddMessageFormRedux onSubmit={onAddPost} />
        <div className={style.posts}>
            {postsElements}
        </div>
    </div>
});

export default MyPosts;