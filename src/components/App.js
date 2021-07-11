import logo from '../images/logo.svg';

function App() {
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
      </header>

      <main className="main">

        <section className="profile">
          <div className="profile__details">
            <div className="profile__image-group">
              <button className="profile__image-overlay" type="button"
                aria-label="profile image edit button"></button>
              <img className="profile__image" src="#" alt="profile" />
            </div>
            <div className="profile__info">
              <div className="profile__line-top">
                <h1 className="profile__title"></h1>
                <button className="profile__button-edit" type="button" aria-label="edit button"></button>
              </div>
              <p className="profile__subtitle"></p>
            </div>
          </div>
          <button className="profile__button-add" type="button" aria-label="add button"></button>
        </section>


        <section className="image-grid">


        </section>


      </main>

      <footer className="footer">
        <p className="footer__copyright">© 2021 Around The U.S.</p>
      </footer>


      <div className="modal modal_type_edit">
        <div className="modal__container">
          <button className="modal__close-icon modal__close-icon_type_edit" type="button"
            aria-label="close button"></button>
          <form className="edit-box edit-box_type_profile" name="details" noValidate>
            <h2 className="edit-box__title">Edit profile</h2>
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
                    <div className="edit-box__inputs">
                      <div className="edit-box__input-group">
                        <input id="profile-image-link-input" className="edit-box__input edit-box__input_type_image-link" type="url"
                          name="profileimage" placeholder="Image Link" required />
                          <span id="profile-image-link-input-error" className="edit-box__input-error"></span>
                    </div>
                      </div>
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
                </div>



                <div className="modal image-expand">
                  <div className="image-expand__container">
                    <button className="modal__close-icon modal__close-icon_type_image" type="button"
                      aria-label="close button"></button>
                    <div className="image-expand__info">
                      <img src="#" className="image-expand__image" alt="#" />
                      <h2 className="image-expand__title"></h2>
                    </div>
                  </div>
                </div>



                <template id="image-card-template">
                  <div className="image-card">
                    <button className="image-card__trash" type="button" aria-label="trash button"></button>
                    <img className="image-card__image" src="./images/yosemite-valley.jpg" alt="#" />
                    <div className="image-card__text">
                      <h2 className="image-card__title"></h2>
                      <div className="image-card__heart-group">
                        <button className="image-card__heart" aria-label="Like button" type="button"></button>
                        <p className="image-card__heart-number"></p>
                      </div>
                    </div>
                  </div>
                </template>



                <script src="https://unpkg.com/regenerator-runtime@0.13.1/runtime.js"></script>
    </>
              );
}

              export default App;
