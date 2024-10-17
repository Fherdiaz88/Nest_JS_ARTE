/*
  Warnings:

  - You are about to drop the column `updateAt` on the `Arte` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Arte" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
