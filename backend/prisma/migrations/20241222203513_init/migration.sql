/*
  Warnings:

  - You are about to drop the column `staus` on the `TOdo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TOdo" DROP COLUMN "staus",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;
