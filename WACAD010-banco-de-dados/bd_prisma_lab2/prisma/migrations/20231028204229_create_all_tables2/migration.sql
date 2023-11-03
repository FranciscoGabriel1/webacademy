-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `produto_SubcategoriaID_fkey`;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_SubcategoriaID_fkey` FOREIGN KEY (`SubcategoriaID`) REFERENCES `subcategoria`(`SubcategoriaID`) ON DELETE SET NULL ON UPDATE CASCADE;
