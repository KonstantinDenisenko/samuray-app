import {profileAPI, userAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDAT_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, likesCount: "1", message: 'Hi, how are you?'},
        {id: 2, likesCount: "2", message: "It's my first post"},
        {id: 3, likesCount: "3", message: "Blabla"},
        {id: 4, likesCount: "4", message: "Dada"}
    ],
    newPostText: "IT-KAMASUTRA",
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: 5, likesCount: 5, message: state.newPostText}
                ],
                newPostText: ''
            };

        case UPDAT_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDAT_NEW_POST_TEXT, newText: text});
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId)
            .then((data) => {
                dispatch(setUserProfileAC(data));
            });
    }
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then((data) => {
                dispatch(setStatus(data));
            });
    }
};

export const udpdateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((data) => {
                if(data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
};

export default profileReducer;