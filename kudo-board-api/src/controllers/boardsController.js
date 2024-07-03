// const express = require("express");
// const router = express.Router();
const boardsModel = require("../models/boardsModel");

// Function gets all the boards
const getAllBoards = async (req, res) => {
    const { title, category } = req.query; //make for filtering

    let orderBy = {};
    let filter = {};

    //filtering by category
    if (category) {
      filter.category = category;
    }
    //sorting by name
    if (title) {
      orderBy = { title: title === "asc" ? "asc" : "desc" };
    }

  try {
    const boards = await boardsModel.getAllBoards(filter, orderBy);
    res.status(200).json(boards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to get boards by ID
const getBoardsById = async (req, res) => {
  try {
    const boards = await boardsModel.getBoardsById(req.params.id);
    if (boards) {
      res.status(200).json(boards);
    } else {
      res.status(404).json({ error: "Boards not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to create boards
const createBoards = async (req, res) => {
  try {
    const newBoards = await boardsModel.createBoards(req.body);
    res.status(201).json(newBoards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to update boards
const updateBoards = async (req, res) => {
  try {
    const updatedBoards = await boardsModel.updateBoards(
      req.params.id,
      req.body
    );
    if (updatedBoards) {
      res.status(200).json(updatedBoards);
    } else {
      res.status(404).json({ error: "Boards not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to delete boards
const deleteBoards = async (req, res) => {
  try {
    const deletedBoards = await boardsModel.deleteBoards(req.params.id);
    if (deletedBoards) {
      res.status(200).json(deletedBoards);
    } else {
      res.status(404).json({ error: "Boards not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Export the functions
module.exports = {
  getAllBoards,
  getBoardsById,
  createBoards,
  updateBoards,
  deleteBoards
};
