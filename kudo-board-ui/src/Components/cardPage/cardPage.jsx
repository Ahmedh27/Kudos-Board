import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CreateNewCard from "../CreateNewCard/CreateNewCard";
import "./cardPage.css";

const CardPage = () => {
  const { cardId } = useParams();
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`https://kudos-board-sn57.onrender.com/cards/${cardId}/cards`);
        setCards(response.data);
      } catch (error) {
        console.error("error:", error);
      }
    };
    fetchCards();
  }, [cardId]);

  const handleUpvote = async (card) => {
    try {
      const updatedUpvotes = card.upvote + 1;
      await axios.patch(`https://kudos-board-sn57.onrender.com/cards/${card.card_id}`, { upvote: updatedUpvotes });
      setCards((prevCards) =>
        prevCards.map((c) => (c.card_id === card.card_id ? { ...c, upvote: updatedUpvotes } : c))
      );
    } catch (error) {
      console.error("error:", error);
    }
  };

  const handleDelete = async (card) => {
    try {
      await axios.delete(`https://kudos-board-sn57.onrender.com/cards/${card.card_id}`);
      setCards((prevCards) => prevCards.filter((c) => c.card_id !== card.card_id));
    } catch (error) {
      console.error("error:", error);
    }
  };

  const handleCardCreated = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <div className="card-page">
      <Link to="/" className="back-link">
        <span className="back-arrow">← Back</span>
      </Link>
      <Header />
      <CreateNewCard selectedBoardId={cardId} onAddCard={handleCardCreated} />
      <div className="card-details">
        {cards.map((card) => (
          <div key={card.card_id} className="card">
            {card.image && <img src={card.image} alt={card.title} className="card-details-image" />}
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <p><strong>Owner:</strong> {card.owner}</p>
              <div className="card-actions">
                <button onClick={() => handleUpvote(card)} className="upvote-button">Upvote ({card.upvote})</button>
                <button onClick={() => handleDelete(card)} className="delete-button">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPage;

