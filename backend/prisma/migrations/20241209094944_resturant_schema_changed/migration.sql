/*
  Warnings:

  - Added the required column `resturant_name` to the `resturant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "resturant" ADD COLUMN     "resturant_name" TEXT NOT NULL;
