import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }


    return (
        <div className="image-card" key={props.id}>
            <button className="image-card__trash" type="button" aria-label="trash button"></button>
            <img className="image-card__image" src={props.link} alt={props.name} onClick={handleClick} />
            <div className="image-card__text">
                <h2 className="image-card__title">{props.name}</h2>
                <div className="image-card__heart-group">
                    <button className="image-card__heart" aria-label="Like button" type="button"></button>
                    <p className="image-card__heart-number"></p>
                </div>
            </div>
        </div>
    )
}

export default Card;