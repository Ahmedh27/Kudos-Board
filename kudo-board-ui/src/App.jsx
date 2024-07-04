import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import SubNavBar from "./Components/SubNavBar/SubNavBar";
import Header from "./Components/Header/Header";
import CreateBoardButton from "./Components/CreateBoardButton/CreateBoardButton";
import CreateNewCard from "./Components/CreateNewCard/CreateNewCard";
import Board from "./Components/Board/Board";
import CardPage from "./Components/cardPage/cardPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [boards, setBoards] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [filteredBoards, setFilteredBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const baseUrl = "https://kudos-board-sn57.onrender.com";
  const location = useLocation();

  useEffect(() => {
    const fetchBoards = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(`${baseUrl}/boards`);
        const data = response.data;
        setBoards(data);
        setFilteredBoards(data);
      } catch (error) {
        console.error("error: fetching boards", error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchBoards();
  }, []);

  useEffect(() => {
    filterBoards();
  }, [boards, activeCategory, searchInputValue]);

  const filterBoards = () => {
    let filtered = boards;
    if (activeCategory !== "All") {
      filtered = filtered.filter(board => board.category === activeCategory);
    }
    if (searchInputValue) {
      filtered = filtered.filter(board =>
        board.title.toLowerCase().includes(searchInputValue.toLowerCase())
      );
    }
    setFilteredBoards(filtered);
  };

  const handleDelete = async (cardId) => {
    try {
      await axios.delete(`${baseUrl}/cards/${cardId}`);
      setBoards(boards.filter((board) => board.id !== cardId));
      setFilteredBoards(filteredBoards.filter((board) => board.id !== cardId));
    } catch (error) {
      console.error("error: deleting card", error);
    }
  };

  const handleOnSearchInputChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  const handleSelectBoard = (boardId) => {
    setSelectedBoardId(boardId);
  };

  const handleAddBoard = (newBoard) => {
    setBoards([...boards, newBoard]);
    setFilteredBoards([...boards, newBoard]);
  };

  const handleAddCard = (newCard) => {
    const updatedBoards = boards.map((board) =>
      board.id === newCard.boardId ? { ...board, cards: [...board.cards, newCard] } : board
    );
    setBoards(updatedBoards);
    setFilteredBoards(updatedBoards);
  };

  return (
    <>
      <Header />
      {location.pathname === "/" && (
        <>
          <SubNavBar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchInputValue={searchInputValue}
            handleOnSearchInputChange={handleOnSearchInputChange}
          />
          <div className="create-board-container">
            <CreateBoardButton onAddBoard={handleAddBoard} />
          </div>
        </>
      )}
      {location.pathname.startsWith("/cards/") && (
        <CreateNewCard selectedBoardId={selectedBoardId} onAddCard={handleAddCard} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            isFetching ? (
              <p>Loading...</p>
            ) : (
              <div className="card-container">
                {filteredBoards.map((board) => (
                  <div key={board.id} onClick={() => handleSelectBoard(board.id)}>
                    <Board card={board} onDelete={() => handleDelete(board.id)} />
                  </div>
                ))}
              </div>
            )
          }
        />
        <Route
          path="/boards"
          element={
            isFetching ? (
              <p>Loading...</p>
            ) : (
              <div className="card-container">
                {filteredBoards.map((board) => (
                  <div key={board.id} onClick={() => handleSelectBoard(board.id)}>
                    <Board card={board} onDelete={() => handleDelete(board.id)} />
                  </div>
                ))}
              </div>
            )
          }
        />
        <Route path="/boards/:cardId/cards" element={<CardPage />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);

export default App;

