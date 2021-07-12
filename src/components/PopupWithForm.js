import React from 'react';

function PopupWithForm(props) {

    return (
        <>

            <div className={`modal modal_type_${props.name} ${props.isOpen ? 'modal_open' : ''}`}>
                <div className="modal__container">
                    <button className={`modal__close-icon modal__close-icon_type_${props.name}`} type="button"
                        aria-label="close button" onClick={props.onClose}></button>
                    <form className={`edit-box edit-box_type_${props.name}`} name="details" noValidate>
                        <h2 className="edit-box__title">{props.title}</h2>
                        {props.children}
                        <button className="edit-box__button edit-box__button_edit" type="submit"
                            aria-label="save button" data-textcontent="Save">{props.buttonText}</button>
                    </form>
                </div>
            </div>


            {/* <div className="modal modal_type_edit">
                <div className="modal__container">
                    <button className="modal__close-icon modal__close-icon_type_edit" type="button"
                        aria-label="close button"></button>
                    <form className="edit-box edit-box_type_profile" name="details" noValidate>
                        <h2 className="edit-box__title">Edit profile</h2>
                        <button className="edit-box__button edit-box__button_edit" type="submit"
                            aria-label="save button" data-textcontent="Save">Save</button>
                    </form>
                </div>
            </div>


            <div className="modal modal_type_add">
                <div className="modal__container">
                    <button className="modal__close-icon modal__close-icon_type_add" type="button"
                        aria-label="close button"></button>
                    <form className="edit-box edit-box_type_image" name="details" noValidate>
                        <h2 className="edit-box__title">New place</h2>
                        <button className="edit-box__button edit-box__button_add" type="submit"
                            aria-label="save button" data-textcontent="Create">Create</button>
                    </form>
                </div>
            </div>



            <div className="modal modal_type_profile-image">
                <div className="modal__container">
                    <button className="modal__close-icon modal__close-icon_type_edit" type="button"
                        aria-label="close button"></button>
                    <form className="edit-box edit-box_type_profile-image" name="details" noValidate>
                        <h2 className="edit-box__title">Change profile picture</h2>
                        <button className="edit-box__button edit-box__button_profile-image" type="submit"
                            aria-label="save button" data-textcontent="Save">Save</button>
                    </form>
                </div>
            </div>

            <div className="modal modal_type_delete-card">
                <div className="modal__container">
                    <button className="modal__close-icon modal__close-icon_type_edit" type="button"
                        aria-label="close button"></button>
                    <form className="edit-box edit-box_type_profile" name="details" noValidate>
                        <h2 className="edit-box__title">Are you sure?</h2>
                        <button className="edit-box__button edit-box__button_delete-card" type="submit"
                            aria-label="delete button" data-textcontent="Yes">Yes</button>
                    </form>
                </div>
            </div> */}
        </>

    )
}

export default PopupWithForm;