import {authAPI, profileAPI, userAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    posts: [
        {id: 1, likesCount: "1", message: 'Hi, how are you?'},
        {id: 2, likesCount: "2", message: "It's my first post"},
        {id: 3, likesCount: "3", message: "Blabla"},
        {id: 4, likesCount: "4", message: "Dada"}
    ],
    profile: null,
    status: "s"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: 5, likesCount: 5, message: action.newPostText}
                ]
            };

        case DELETE_POST:
            return {
                ...state,
                posts: [
                    ...state.posts.filter(post => post.id !== action.deletePost)
                ]
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (deletePost) => ({type: DELETE_POST, deletePost});
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {
    let responseData = await userAPI.getProfile(userId);
    dispatch(setUserProfileAC(responseData));
};

export const getUserStatus = (userId) => async (dispatch) => {
    let responseData = await profileAPI.getStatus(userId);
    dispatch(setStatus(responseData));
};

export const updateStatus = (status) => async (dispatch) => {
    let responseData = await profileAPI.updateStatus(status);
    if(responseData.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;