-- CreateTable
CREATE TABLE `usuario` (
    `id` CHAR(40) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `senha` VARCHAR(80) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `tipoUsuarioId` CHAR(40) NULL,

    UNIQUE INDEX `usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_usuario` (
    `id` CHAR(40) NOT NULL,
    `rotulo` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `tipo_usuario_rotulo_key`(`rotulo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usuario` ADD CONSTRAINT `usuario_tipoUsuarioId_fkey` FOREIGN KEY (`tipoUsuarioId`) REFERENCES `tipo_usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
