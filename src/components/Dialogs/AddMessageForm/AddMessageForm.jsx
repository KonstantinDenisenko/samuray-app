import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                validate={[required, maxLength]}
                name="newMessageBody"
                placeholder='Enter your message'
            />
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};
export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);