/*
  Warnings:

  - You are about to alter the column `PrecoBase` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal`.

*/
-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `Produto_SubcategoriaID_fkey`;

-- AlterTable
ALTER TABLE `produto` MODIFY `PrecoBase` DECIMAL NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `produto_SubcategoriaID_fkey` FOREIGN KEY (`SubcategoriaID`) REFERENCES `subcategoria`(`SubcategoriaID`) ON DELETE SET NULL ON UPDATE CASCADE;
