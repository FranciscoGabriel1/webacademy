/*
  Warnings:

  - Added the required column `CategoriaID` to the `subcategoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subcategoria` ADD COLUMN `CategoriaID` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `subcategoria` ADD CONSTRAINT `subcategoria_CategoriaID_fkey` FOREIGN KEY (`CategoriaID`) REFERENCES `categoria`(`CategoriaID`) ON DELETE RESTRICT ON UPDATE CASCADE;
