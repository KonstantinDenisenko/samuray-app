import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, likesCount: "1", message: 'Hi, how are you?'},
        {id: 2, likesCount: "2", message: "It's my first post"},
        {id: 3, likesCount: "3", message: "Blabla"},
        {id: 4, likesCount: "4", message: "Dada"}
    ]
};

it('Message of new post should be correct', () => {
    let action = addPostActionCreator("IT-KAMASUTRA");
    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("IT-KAMASUTRA");
});

it('Length of post should be incremented', () => {
    let action = addPostActionCreator("IT-KAMASUTRA");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('After deleted message length should be decrement', () => {
    let action = deletePost(2);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('After deleted message length should be decrement if id is not correct', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

