import React from 'react';
import PopupWithForm from './PopupWithForm';

function ProfileImagePopup(props) {

    const [avatar, setAvatar] = React.useState();
    const avatarRef = React.useRef();


    function handleAvatarChange(e) {
        setAvatar(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onRenderLoading();
        props.onUpdateAvatar(
            avatar,
        );
        setAvatar('');
    }

    return (
        <PopupWithForm name="profile-image" title="Change profile picture" loadingText="Saving..." buttonText="Save" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} isLoading={props.isLoading}>
            <div className="edit-box__inputs">
                <div className="edit-box__input-group">
                    <input value={avatar || ''} ref={avatarRef} id="profile-image-link-input" className="edit-box__input edit-box__input_type_image-link" type="url"
                        name="profileimage" placeholder="Image Link" onChange={handleAvatarChange} required />
                    <span id="profile-image-link-input-error" className="edit-box__input-error"></span>
                </div>
            </div>
        </PopupWithForm>
    );
}

export default ProfileImagePopup;