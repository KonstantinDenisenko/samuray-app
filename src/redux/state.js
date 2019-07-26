const ADD_POST = "ADD-POST";
const UPDAT_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi, how are you?', likesCount: "15"},
                {message: "It\'s my first post", likesCount: "20"},
                {message: "Blabla", likesCount: "11"},
                {message: "Dada", likesCount: "11"}
            ],
            newPostText: "IT-KAMASUTRA"
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Konstantin'},
                {id: '2', name: 'Richard'},
                {id: '3', name: 'Bob'},
                {id: '4', name: 'Miha'},
                {id: '5', name: 'Medved'}
            ],
            messages: [
                {message: 'Hello'},
                {message: 'How are you?'},
                {message: "I'am fine)"}
            ]
        }
    },
    _callSubscriber () {
        console.log("Hello");
    },
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDAT_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDAT_NEW_POST_TEXT, newText: text});

window.store = store;

export default store;