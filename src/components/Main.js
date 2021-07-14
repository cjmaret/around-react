import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((err) => console.log(err));

        api.getCardList()
            .then(res => {
                setCards(res);
            })
            .catch((err) => console.log(err));
    }, []);

    

    return (
        <main className="main">

            <section className="profile">
                <div className="profile__details">
                    <div className="profile__image-group">
                        <button className="profile__image-overlay" type="button"
                            aria-label="profile image edit button" onClick={props.onEditAvatarClick}></button>
                        <img className="profile__image" src={userAvatar} alt="profile" />
                    </div>
                    <div className="profile__info">
                        <div className="profile__line-top">
                            <h1 className="profile__title">{userName}</h1>
                            <button className="profile__button-edit" type="button" aria-label="edit button" onClick={props.onEditProfileClick}></button>
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__button-add" type="button" aria-label="add button" onClick={props.onAddPlaceClick}></button>
            </section>


            <section className="image-grid">

                {cards.map(card => {
                    return (
                        <Card key={card._id} name={card.name} id={card._id} link={card.link} likes={card.likes.length} card={card} onCardClick={props.onCardClick}/>
                    )
                })}

            </section>


        </main>
    )
}

export default Main;