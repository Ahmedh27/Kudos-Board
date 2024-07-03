const express = require("express"); 
const router = express.Router();
const cardsController = require("../controllers/cardsController");

// get all the cards
router.get("/", cardsController.getAllCards);
//get cards by ID
router.get("/:card_id", cardsController.getCardsById);
//add a new cards
router.post("/", cardsController.createCards);
//delete new card
router.delete("/:card_id", cardsController.deleteCards);
// get all cards for a specific board
router.get("/:board_id/cards", cardsController.getCardsByBoardId);

// add a new card to a specific board
router.post("/:board_id/cards", cardsController.createCardForBoard);



module.exports = router;