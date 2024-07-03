const express = require("express"); //Importing and Initializing Express
const router = express.Router();
const boardsController = require("../controllers/boardsController");

// get all the boards
router.get("/", boardsController.getAllBoards);
//get boards by ID
router.get("/:id", boardsController.getBoardsById);
//add a new boards
router.post("/", boardsController.createBoards);
//update boards
router.put("/:id", boardsController.updateBoards);
//delete a boards
router.delete("/:id", boardsController.deleteBoards);





module.exports = router;