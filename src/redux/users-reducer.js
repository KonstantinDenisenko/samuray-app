import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [1, 2]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,"id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,"id", {followed: false})
            };
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            };

        case SET_USERS:
            return {...state, users: [...action.users]};
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(page));

    let responseData = await userAPI.getUsers(page, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(responseData.items));
    dispatch(setTotalUsersCount(responseData.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let responseData = await apiMethod(userId);

    if (responseData.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let apiMethod = await userAPI.followPost.bind(userId);
    let actionCreator = followSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
};

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let apiMethod = await userAPI.followDelete.bind(userId);
    let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
};

export default profileReducer;