import { useState, useEffect } from 'react'


const kudoCards = ({ card, onSelect }) => {
    return (
        <div className="card" onClick={() => onSelect(card)}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <img src={card.image} alt="GIF"/>
            <button className='upvote-button' onClick={handleUpvote}>Upvote: {votes}</button>
            <button className="delete-button" onClick={onDelete}>
                Delete
            </button>
        </div>
    );
};

export default kudoCards;

