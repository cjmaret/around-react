import React from 'react';
import PopupWithForm from './PopupWithForm';

function ProfileImagePopup(props) {
    return (
        <PopupWithForm name="profile-image" title="Change profile picture" buttonText="Save" isOpen={props.isOpen} onClose={props.onClose}>
            <div className="edit-box__inputs">
                            <div className="edit-box__input-group">
                                <input id="profile-image-link-input" className="edit-box__input edit-box__input_type_image-link" type="url"
                                    name="profileimage" placeholder="Image Link" required />
                                <span id="profile-image-link-input-error" className="edit-box__input-error"></span>
                            </div>
                        </div>
        </PopupWithForm>
    );
}

export default ProfileImagePopup;