const cardsModel = require("../models/cardsModel");

// Function gets all the cards
const getAllCards = async (req, res) => {
  try {
    const card_item = await cardsModel.getAllCards();
    res.status(200).json(card_item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to get card by ID
const getCardsById = async (req, res) => {
  try {
    const card = await cardsModel.getCardsById(req.params.card_id);
    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({ error: "Card not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to create card
const createCards = async (req, res) => {
  try {
    const newCard = await cardsModel.createCards(req.body);
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to delete cards
const deleteCards = async (req, res) => {
  try {
    const deletedCard = await cardsModel.deleteCards(req.params.card_id);
    if (deletedCard) {
      res.status(200).json(deletedCard);
    } else {
      res.status(404).json({ error: "Card not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to get all cards for a specific board
const getCardsByBoardId = async (req, res) => {
  try {
    const cards = await cardsModel.getCardsByBoardId(req.params.board_id);
    res.status(200).json(cards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to create a new card for a specific board
const createCardForBoard = async (req, res) => {
  try {
    const newCard = await cardsModel.createCardForBoard(req.params.board_id, req.body);
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to update a card
const updateCards = async (req, res) => {
  try {
    const updatedCard = await cardsModel.updateCards(req.params.card_id, req.body);
    if (updatedCard) {
      res.status(200).json(updatedCard);
    } else {
      res.status(404).json({ error: "Card not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Export the functions
module.exports = {
  getAllCards,
  getCardsById,
  createCards,
  deleteCards,
  getCardsByBoardId,
  createCardForBoard,
  updateCards
};
