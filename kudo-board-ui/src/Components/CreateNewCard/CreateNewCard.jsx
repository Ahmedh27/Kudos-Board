import React, { useState } from 'react';
import axios from 'axios';
import './CreateNewCard.css';

const CreateNewCard = ({ selectedBoardId, onAddCard }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Cardtitle, setCardTitle] = useState('');
  const [description, setDescription] = useState('');
  const [searchgif, setSearchgif] = useState('');
  const [gifurl, setGifurl] = useState('');
  const [owner, setOwner] = useState('');
  const [gifs, setGifs] = useState([]);
  const [gifCopied, setGifCopied] = useState(false);

  const API_KEY = 'FvErzQwqV3QYB0Rv8nofNj304xrjQyz2';

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCardTitle('');
    setDescription('');
    setSearchgif('');
    setGifurl('');
    setOwner('');
    setGifs([]);
    setGifCopied(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedBoardId && gifurl) {
      const newCard = {
        title: Cardtitle,
        description: description,
        image: gifurl,
        owner: owner,
        upvote: 0,
        board_id: selectedBoardId,
      };

      try {
        const response = await axios.post(`https://kudos-board-sn57.onrender.com/cards/${selectedBoardId}/cards`, newCard);
        onAddCard(response.data);
        closeModal();
      } catch (error) {
        console.error('Error creating card:', error);
      }
    }
  };

  const handleSearchGifs = async (e) => {
    e.preventDefault();
    if (searchgif.trim() !== '') {
      try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
          params: {
            api_key: API_KEY,
            q: searchgif,
            limit: 6
          }
        });
        setGifs(response.data.data);
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      }
    }
  };

  const handleGifSelect = (url) => {
    setGifurl(url);
    navigator.clipboard.writeText(url).then(() => {
      setGifCopied(true);
      setTimeout(() => setGifCopied(false), 2000);
    });
  };

  return (
    <div className="create-card-container">
      <button className="create-card-button" onClick={openModal}>
        Create New Card
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="Cardtitle">Card title:</label>
                <input
                  type="text"
                  id="Cardtitle"
                  value={Cardtitle}
                  onChange={(e) => setCardTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="searchgif">Search GIFs...</label>
                <input
                  type="text"
                  id="searchgif"
                  value={searchgif}
                  onChange={(e) => setSearchgif(e.target.value)}
                  required
                />
              </div>
              <button type="button" onClick={handleSearchGifs}>Search</button>
              <div className="gif-results">
                {gifs.map((gif) => (
                  <img
                    key={gif.id}
                    src={gif.images.fixed_height.url}
                    alt={gif.title}
                    onClick={() => handleGifSelect(gif.images.fixed_height.url)}
                    style={{ cursor: 'pointer', margin: '5px' }}
                  />
                ))}
              </div>
              {gifurl && (
                <div className="copy-url-section">
                  <label htmlFor="gifurl">Selected GIF URL:</label>
                  <input
                    type="text"
                    id="gifurl"
                    value={gifurl}
                    readOnly
                  />
                  {gifCopied && <span className="copy-notification">URL Copied!</span>}
                </div>
              )}
              <div>
                <label htmlFor="description">Card description:</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="owner">Card Owner:</label>
                <input
                  type="text"
                  id="owner"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                />
              </div>
              <button type="submit">Create Card</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewCard;


