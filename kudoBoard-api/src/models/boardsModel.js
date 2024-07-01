const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the boards
const getAllBoards = async (filter = {}, orderBy = {}) => {
  return prisma.boards.findMany({
    where: filter,
    orderBy: orderBy,
    include: {
      cards: true,
    },
  });
};

//Function to get boards by ID
const getBoardsById = async (id) => {
  return prisma.boards.findUnique({
    where: { id: parseInt(id) },
    include: {
      cards: true,
    },
  });
};

//Function to create a new prod
const createBoards = async (boardsData) => {
  return prisma.boards.create({
    data: {
      title: boardsData.title,
      category: boardsData.category,
      author: boardsData.author,
    },
    include: {
      cards: true,
    },
  });
};

//Function to update prod
const updateBoards = async (id, boardsData) => {
  return prisma.boards.update({
    where: { id: parseInt(id) },
    data: boardsData,
    include: {
      cards: true,
    },
  });
};

//Function to delete prod
const deleteBoards = async (id) => {
  return prisma.boards.delete({ where: { id: parseInt(id) } });
};

//export the functions
module.exports = {
  getAllBoards,
  getBoardsById,
  createBoards,
  updateBoards,
  deleteBoards,
};
