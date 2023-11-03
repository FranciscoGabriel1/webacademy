import { PrismaClient, Produto } from '@prisma/client';
import { CreateProductDTO, UpdateProductDTO } from './produto.types';

const prisma = new PrismaClient();

export async function getAllProducts(): Promise<Produto[]> {
  return await prisma.produto.findMany();
}

export async function createProduct(
  product: CreateProductDTO
): Promise<Produto> {
  return await prisma.produto.create({ data: product });
}

export async function readProduct(ProdutoID: string): Promise<Produto | null> {
  return await prisma.produto.findUnique({ where: { ProdutoID } });
}

export async function updateProduct(
  ProdutoID: string,
  product: UpdateProductDTO
): Promise<Produto> {
  return await prisma.produto.update({
    data: product,
    where: { ProdutoID: ProdutoID }
  });
}

export async function deleteProduct(ProdutoID: string): Promise<void> {
  try {
    const product = await prisma.produto.findUnique({ where: { ProdutoID } });
    if (!product) {
      throw new Error('Produto não encontrado');
    }
    await prisma.produto.delete({ where: { ProdutoID } });
  } catch (error) {
    throw error;
  }
}
