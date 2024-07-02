import React, { useState } from 'react';
import './CreateBoardButton.css'; 

const CreateBoardButton = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title, 'Category:', category, 'Author:', author);
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
              {/* <button type="button" className="close-button" onClick={closeModal}>
                Close
              </button> */}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBoardButton;

