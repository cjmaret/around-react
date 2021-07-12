import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    return (
        <PopupWithForm name="add" title="New place" buttonText="Create" isOpen={props.isOpen} onClose={props.onClose}>
            <div className="edit-box__inputs">
                <div className="edit-box__input-group">
                    <input id="image-title-input" className="edit-box__input edit-box__input_type_image-title"
                        type="text" name="name" placeholder="Title" minLength="1" maxLength="30" required />
                    <span id="image-title-input-error" className="edit-box__input-error"></span>
                </div>
                <div className="edit-box__input-group">
                    <input id="image-link-input" className="edit-box__input edit-box__input_type_image-link" type="url"
                        name="link" placeholder="Image link" required />
                    <span id="image-link-input-error" className="edit-box__input-error"></span>
                </div>
            </div>
        </PopupWithForm>
    );
}

export default AddPlacePopup;