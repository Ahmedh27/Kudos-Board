const express = require("express"); //Importing and Initializing Express
const router = express.Router();
const cardsController = require("../controllers/cardsController");

// get all the cardss
router.get("/", cardsController.getAllCards);

//get cards by ID
router.get("/:order_item_id", cardsController.getCardsById);

//add a new cards
router.post("/", cardsController.createCards);


module.exports = router;