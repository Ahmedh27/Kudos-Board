const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the orders
const getAllCards = async () => {
  return prisma.cards.findMany();
};

//Function to get order by ID
const getCardsById = async (cardId) => {
  return prisma.cards.findUnique({ where: { card_id: parseInt(cardId) } });
};

//Function to create a new prod
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

const deleteCards = async (card_id) => {
  return prisma.cards.delete({
    where: { card_id: parseInt(card_id) }
  });
};

//export the functions
module.exports = {
  getAllCards,
  getCardsById,
  createCards,
  deleteCards,
};