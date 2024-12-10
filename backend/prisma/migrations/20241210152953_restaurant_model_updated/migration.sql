/*
  Warnings:

  - You are about to drop the column `resturant` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `resturant` table. All the data in the column will be lost.
  - Added the required column `resturant_name` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_no` to the `resturant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "items" DROP COLUMN "resturant",
ADD COLUMN     "resturant_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "resturant" DROP COLUMN "username",
ADD COLUMN     "phone_no" TEXT NOT NULL;
