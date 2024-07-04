const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the orders
const getAllCards = async () => {
  return prisma.cards.findMany();
};

// Function to get card by ID
const getCardsById = async (cardId) => {
  return prisma.cards.findUnique({ where: { card_id: parseInt(cardId) } });
};

// Function to create a new card
const createCards = async (cardsData) => {
  return prisma.cards.create({
    data: {
      board_id: parseInt(cardsData.board_id),
      title: cardsData.title,
      description: cardsData.description,
      image: cardsData.image,
      upvote: parseInt(cardsData.upvote),
      owner: cardsData.owner,
    },
  });
};

// Function to delete a card
const deleteCards = async (card_id) => {
  return prisma.cards.delete({
    where: { card_id: parseInt(card_id) }
  });
};

// Function gets all the cards for a specific board
const getCardsByBoardId = async (boardId) => {
  return prisma.cards.findMany({ where: { board_id: parseInt(boardId) } });
};

// Function to create a new card for a specific board
const createCardForBoard = async (boardId, cardsData) => {
  return prisma.cards.create({
    data: {
      board_id: parseInt(boardId),
      title: cardsData.title,
      description: cardsData.description,
      image: cardsData.image,
      upvote: parseInt(cardsData.upvote),
      owner: cardsData.owner,
    },
  });
};

// Function to update a card
const updateCards = async (card_id, cardsData) => {
  return prisma.cards.update({
    where: { card_id: parseInt(card_id) },
    data: {
      board_id: cardsData.board_id ? parseInt(cardsData.board_id) : undefined,
      title: cardsData.title,
      description: cardsData.description,
      image: cardsData.image,
      upvote: cardsData.upvote ? parseInt(cardsData.upvote) : undefined,
      owner: cardsData.owner,
    },
  });
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
