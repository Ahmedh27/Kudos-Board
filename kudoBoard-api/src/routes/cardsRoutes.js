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



module.exports = router;