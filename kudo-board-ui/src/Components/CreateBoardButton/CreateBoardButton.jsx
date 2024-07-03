
import React, { useState } from 'react';
import axios from 'axios';
import './CreateBoardButton.css';

const CreateBoardButton = ({ onAddBoard }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBoard = {
      title,  // Changed from name to title to match schema
      category,
      author,
    };

    try {
      const response = await axios.post('http://localhost:3000/boards', newBoard);
      onAddBoard(response.data);
    } catch (error) {
      console.error('Error creating board:', error);
    }

    setTitle('');
    setCategory('');
    setAuthor('');
    setIsModalOpen(false);
  };

  return (
    <div className="create-board-container">
      <button className="create-board-button" onClick={openModal}>
        Create New Board
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Recent">Recent</option>
                  <option value="Celebration">Celebration</option>
                  <option value="Thank You">Thank You</option>
                  <option value="Inspiration">Inspiration</option>
                </select>
              </div>
              <div>
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Create Board</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBoardButton;
