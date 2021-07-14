import React from 'react';

function PopupWithForm(props) {

    return (
        <>

            <div className={`modal modal_type_${props.name} ${props.isOpen ? 'modal_open' : ''}`}>
                <div className="modal__container">
                    <button className={`modal__close-icon modal__close-icon_type_${props.name}`} type="button"
                        aria-label="close button" onClick={props.onClose}></button>
                    <form className={`edit-box edit-box_type_${props.name}`} name="details">
                        <h2 className="edit-box__title">{props.title}</h2>
                        {props.children}
                        <button className="edit-box__button edit-box__button_edit" type="submit"
                            aria-label="save button" data-textcontent="Save">{props.buttonText}</button>
                    </form>
                </div>
            </div>
            
        </>

    )
}

export default PopupWithForm;