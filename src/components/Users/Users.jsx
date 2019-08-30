import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/DuenJohnson.jpg';
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let a = 1; a <= pageCount; a++) {
        pages.push(a);
    }

    return (
        <div className={style.users}>
            <div className={style.currentPages}>
                {pages.map((num, id) => {
                    return <span
                        key={id}
                        className={props.currentPage === num ? style.selectPage : ''}
                        onClick={() => {
                            props.onPageChanged(num)
                        }}>{num}</span>
                })}
            </div>
            {
                props.users.map(user => {
                    return <div key={user.id} className={style.userBorder}>
                        <div className={style.userPhoto}>
                            <NavLink to={'/profile/' + user.id}>
                                <img alt="face" src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                            </NavLink>
                            {user.followed
                                ? <button className={props.followingInProgress.some(id => id === user.id) ? style.btn : ""}
                                          disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {props.follow(user.id);}}
                                >{props.followingInProgress.some(id => id === user.id) ? "request..." : "Follow"}</button>

                                : <button className={props.followingInProgress.some(id => id === user.id) ? style.btn : style.yellow}
                                          disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {props.unfollow(user.id);}}
                                >{props.followingInProgress.some(id => id === user.id) ? "request..." : "Unfollow"}</button>}
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
                })
            }
        </div>
    )

};

export default Users;