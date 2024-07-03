-- DropForeignKey
ALTER TABLE "cards" DROP CONSTRAINT "cards_card_id_fkey";

-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "board_id" INTEGER;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "boards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
