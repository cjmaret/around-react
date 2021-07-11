import React from 'react';

function Main() {
    return (
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
    )
}

export default Main;