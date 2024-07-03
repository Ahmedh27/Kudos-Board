import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const cardPage = () => {

    const {boardId} = useParams;
    const [boardTitle, setBoardTitle] = useState("");
    const [cards, setCards] = useState([]);
    const [showModal, setShowModal] = setState(false);

    useEffect(() => {
        fetchCards();
        fetchBoardData();
    }, [boardId]);

    const fetchCards = async () => {
        try {
            const response = await axios.get(`some fucking link`);
            setCards(response.data.cards)
        }catch(error){
            console.error("error:", error);
        }
    }
    
    const fetchBoards = async () => {
        try{
            const response = await axios.get(`another link`);
            const title = response.data.title;
            setBoardTitle(title);
        }catch(error){
            console.error("errror:", error);
        }
    }

    const deletingCards = async (cardId) => {
        try{
            await axios.delete(`crazylink tf?`);
            getchCards();
        }catch(error) {
            console.error("error can't delete card:", error)        
        }
    }

    const showCreateModal = () => {
        setShowModal(!showModal);
    }

    const handleSuccess = (newCard) => {
        if(newCard && newCard.card_id){
            setCards[...cards, newCards];
            setShowForm(false);
        }else {
            console.error("error: no card data", newCard);
        }
    }

    return(
        <div>
            <Link to="/">
                <span className="back-arrow">L</span>
            </Link>
            <Header />
            <h2> {boardTitle}</h2>
            <div className="center-create-button">
                <button className="create-card-btn" onClick={toggleForm}>
                Create a Card
                </button>
                {showForm && (
                <CardForm
                    boardId={boardId}
                    onSuccess={handleCreateSuccess}
                    onClose={toggleForm}
                />
                )}
            </div>

        <div className="card-list">
            {cards.map((card) => (
            <div className="card-preview">
            <Card
                key={card.card_id}
                card={card}
                onDelete={() => handleDelete(card.card_id)}
            />
            </div>
            ))}
        </div>
        <Footer />
    </div>
    )

}

export default cardPage
