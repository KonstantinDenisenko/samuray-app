import React from 'react';
import style from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return (
        <div className={style.users}>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
            />
            { users.map(user => <User
                key={user.id}
                user={user}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
            />) }
        </div>
    )
};

export default Users;