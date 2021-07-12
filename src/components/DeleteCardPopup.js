import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup() {
    return (
        <PopupWithForm name="delete-card" title="Are you sure?" buttonText="Yes">
        </PopupWithForm>
    );
}

export default DeleteCardPopup;