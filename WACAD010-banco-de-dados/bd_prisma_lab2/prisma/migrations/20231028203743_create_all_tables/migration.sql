-- CreateTable
CREATE TABLE `numeroserie` (
    `NumSerieID` CHAR(40) NOT NULL,
    `NumeroSerie` CHAR(255) NOT NULL,
    `ProdutoID` VARCHAR(191) NULL,

    PRIMARY KEY (`NumSerieID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compra` (
    `CompraID` VARCHAR(191) NOT NULL,
    `DataHoraCompra` DATETIME(3) NULL,
    `DescontoAplicado` DECIMAL(5, 2) NULL,
    `FormaPagamento` CHAR(255) NULL,
    `TotalCompra` DECIMAL(10, 2) NULL,
    `EnderecoID` VARCHAR(191) NULL,
    `ClienteID` VARCHAR(191) NULL,

    PRIMARY KEY (`CompraID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `ProdutoID` VARCHAR(191) NOT NULL,
    `Modelo` CHAR(255) NOT NULL,
    `Fabricante` CHAR(255) NULL,
    `PrecoBase` DECIMAL(10, 2) NULL,
    `QuantidadeDisponivel` INTEGER NULL,
    `SubcategoriaID` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`ProdutoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cliente` (
    `ClienteID` VARCHAR(191) NOT NULL,
    `NomeCompleto` VARCHAR(100) NOT NULL,
    `CPF` VARCHAR(14) NOT NULL,
    `NumeroCelular` VARCHAR(20) NULL,
    `Email` VARCHAR(255) NULL,
    `DataNascimento` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `cliente_CPF_key`(`CPF`),
    PRIMARY KEY (`ClienteID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco` (
    `EnderecoID` VARCHAR(191) NOT NULL,
    `Rua` CHAR(255) NOT NULL,
    `Cidade` CHAR(255) NULL,
    `Estado` CHAR(50) NULL,
    `CEP` CHAR(10) NULL,

    PRIMARY KEY (`EnderecoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria` (
    `CategoriaID` VARCHAR(191) NOT NULL,
    `NomeCategoria` CHAR(255) NOT NULL,

    PRIMARY KEY (`CategoriaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategoria` (
    `SubcategoriaID` VARCHAR(191) NOT NULL,
    `NomeSubcategoria` CHAR(255) NOT NULL,
    `CategoriaID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`SubcategoriaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `itenscompra` (
    `ProdutoID` VARCHAR(191) NOT NULL,
    `CompraID` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NULL,

    PRIMARY KEY (`ProdutoID`, `CompraID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `numeroserie` ADD CONSTRAINT `numeroserie_ProdutoID_fkey` FOREIGN KEY (`ProdutoID`) REFERENCES `produto`(`ProdutoID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_EnderecoID_fkey` FOREIGN KEY (`EnderecoID`) REFERENCES `endereco`(`EnderecoID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_ClienteID_fkey` FOREIGN KEY (`ClienteID`) REFERENCES `cliente`(`ClienteID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `produto_SubcategoriaID_fkey` FOREIGN KEY (`SubcategoriaID`) REFERENCES `subcategoria`(`SubcategoriaID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subcategoria` ADD CONSTRAINT `subcategoria_CategoriaID_fkey` FOREIGN KEY (`CategoriaID`) REFERENCES `categoria`(`CategoriaID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itenscompra` ADD CONSTRAINT `itenscompra_ProdutoID_fkey` FOREIGN KEY (`ProdutoID`) REFERENCES `produto`(`ProdutoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itenscompra` ADD CONSTRAINT `itenscompra_CompraID_fkey` FOREIGN KEY (`CompraID`) REFERENCES `compra`(`CompraID`) ON DELETE RESTRICT ON UPDATE CASCADE;
