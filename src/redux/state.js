import profileReducer from '../redux/profile-reducer';
import dialogsReducer from '../redux/dialogs-reducer';

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
                {id: '6', message: 'Hello'},
                {id: '7', message: 'How are you?'},
                {id: '8', message: "I'am fine)"}
            ],
            newMessageBody: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;