/*
  Warnings:

  - You are about to alter the column `PrecoBase` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal(9,2)`.

*/
-- AlterTable
ALTER TABLE `produto` MODIFY `PrecoBase` DECIMAL(9, 2) NULL;
