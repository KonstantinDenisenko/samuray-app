import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/DuenJohnson.jpg';
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow,}) => {

    return (
        <div className={style.userBorder}>
            <div className={style.userPhoto}>
                <NavLink to={'/profile/' + user.id}>
                    <img alt="face" src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                </NavLink>
                {user.followed
                    ? <button className={followingInProgress.some(id => id === user.id) ? style.btn : ""}
                              disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id);
                              }}
                    >{followingInProgress.some(id => id === user.id) ? "request..." : "Follow"}</button>

                    : <button
                        className={followingInProgress.some(id => id === user.id) ? style.btn : style.yellow}
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id);
                        }}
                    >{followingInProgress.some(id => id === user.id) ? "request..." : "Unfollow"}</button>}
            </div>
            <div className={style.usersInfo}>
                <div className={style.userInfoWrap}>
                    <div className={style.whoWhat}>
                        <span>{user.name}</span>
                        <p>{user.status}</p>
                    </div>
                    <div className={style.country}>
                        <i>"user.location.city"</i>
                        <strong>"user.location.country"</strong>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default User;