import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditInfoPopup(props) {
    return (
        <PopupWithForm name="edit" title="Edit profile" buttonText="Save changes" isOpen={props.isOpen} onClose={props.onClose}>
            <div className="edit-box__inputs">
                <div className="edit-box__input-group">
                    <input id="title-input" className="edit-box__input edit-box__input_type_title" type="text"
                        name="username" placeholder="Name" minLength="2" maxLength="40" required />
                    <span id="title-input-error" className="edit-box__input-error"></span>
                </div>
                <div className="edit-box__input-group">
                    <input id="subtitle-input" className="edit-box__input edit-box__input_type_description" type="text"
                        name="userdescription" placeholder="Description" minLength="2" maxLength="200" required />
                    <span id="subtitle-input-error" className="edit-box__input-error"></span>
                </div>
            </div>
        </PopupWithForm>
    );
}

export default EditInfoPopup;