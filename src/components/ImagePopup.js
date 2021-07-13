import React from 'react';

function ImagePopup(props) {

    return (
        <div className={`modal image-expand modal_open`} key={props.card._id}>
            <div className="image-expand__container">
                <button className="modal__close-icon modal__close-icon_type_image" type="button"
                    aria-label="close button" onClick={props.onClose}></button>
                <div className="image-expand__info">
                    <img src={props.card.link} className="image-expand__image" alt={props.card.name} />
                    <h2 className="image-expand__title">{props.card.name}</h2>
                </div>
            </div>
        </div>
    )
}

export default ImagePopup;