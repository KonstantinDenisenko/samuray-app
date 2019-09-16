const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return  {
                ...state,
                messages: [...state.messages, {id: '9', message: action.newMessageBody}]
            };

        default:
            return state;
    }
};
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;