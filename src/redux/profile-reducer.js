const ADD_POST = "ADD-POST";
const UPDAT_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1,likesCount: "1", message: 'Hi, how are you?'},
        {id: 2,likesCount: "2", message: "It's my first post"},
        {id: 3,likesCount: "3", message: "Blabla"},
        {id: 4,likesCount: "4", message: "Dada"}
    ],
    newPostText: "IT-KAMASUTRA"
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
            return  {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDAT_NEW_POST_TEXT, newText: text});

export default profileReducer;