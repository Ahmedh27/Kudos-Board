-- CreateTable
CREATE TABLE "boards" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "boards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
    "card_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "upvote" INTEGER NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("card_id")
);

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "boards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
