import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditInfoPopup from './EditInfoPopup';
import AddPlacePopup from './AddPlacePopup';
import ProfileImagePopup from './ProfileImagePopup';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard();
  }

  function handleCardClick(clickedCard) {
    setSelectedCard(clickedCard);
  }
  


  return (
    <>
      <Header />
      <Main  onCardClick={handleCardClick} onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick} />
      <Footer />
      <EditInfoPopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <ProfileImagePopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <ImagePopup card={selectedCard}  onClose={closeAllPopups}/>





      <script src="https://unpkg.com/regenerator-runtime@0.13.1/runtime.js"></script>
    </>
  );
}

export default App;
