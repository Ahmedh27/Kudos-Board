import React from "react";
import { Link } from "react-router-dom";
import "./Board.css";

const Board = ({ card, onDelete, boards }) => {
  const randomImage = `https://picsum.photos/200/300?random=${card.board_id}-${Math.floor(Math.random() * 1000)}`;
  console.log("card is: ", card)

  return (
    <div className="card">
      {card.image && <img src={card.image} alt={card.title} className="card-image" />}
      <div className="card-content">
        <img
          src={randomImage}
          alt={card.title}
        />
        <h3>{card.title}</h3>
        <p>{card.category}</p>
        <div className="card-actions">
          <button onClick={onDelete} className="delete-button">Delete</button>
          <Link to={`/boards/${card.id}/cards`} className="view-button">View</Link>
        </div>
      </div>
    </div>
  );
};

export default Board;








