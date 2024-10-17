/*
  Warnings:

  - Made the column `updatedAt` on table `Arte` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Arte" ALTER COLUMN "updatedAt" SET NOT NULL;
