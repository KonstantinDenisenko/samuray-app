import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
    return <div className={style.content}>
        <ProfileInfo/>
        <MyPosts
            profilePage={props.profilePage}
            dispatch={props.dispatch}
        />
    </div>;
};

export default Profile;