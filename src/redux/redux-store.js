import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer
});

let store = createStore(reducer);

export default store;