import {getAuthUserData} from "./auth-reducer";

const INITIALIZATION_SUCCES = "INITIALIZATION-SUCCES";

let initialState = {
   initialized: false
};

const appReducer = (state = initialState, action) => {

   switch (action.type) {

      case INITIALIZATION_SUCCES:
         return {
            ...state,
            initialized: true
         };

      default:
         return state;
   }
};

export const initializationSucces = () => ({type: INITIALIZATION_SUCCES});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializationSucces());
        });
};

export default appReducer;