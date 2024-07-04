const express = require("express");
const router = express.Router();
const cardsController = require("../controllers/cardsController");

// Get all the cards
router.get("/", cardsController.getAllCards);

// Get card by ID
router.get("/:card_id", cardsController.getCardsById);

// Add a new card
router.post("/", cardsController.createCards);

// Delete a card
router.delete("/:card_id", cardsController.deleteCards);

// Get all cards for a specific board
router.get("/:board_id/cards", cardsController.getCardsByBoardId);

// Add a new card to a specific board
router.post("/:board_id/cards", cardsController.createCardForBoard);

// Update a card
router.patch("/:card_id", cardsController.updateCards);

module.exports = router;
