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

export async function nameAlreadyExists(nome: string): Promise<boolean> {
  return !!(await prisma.produto.findUnique({ where: { nome } }));
}

export async function readProduct(id: string): Promise<Produto | null> {
  return await prisma.produto.findUnique({ where: { id } });
}

export async function updateProduct(
  id: string,
  product: UpdateProductDTO
): Promise<Produto> {
  return await prisma.produto.update({ data: product, where: { id: id } });
}

export async function deleteProduct(id: string): Promise<void> {
  try {
    const product = await prisma.produto.findUnique({ where: { id } });
    if (!product) {
      throw new Error('Produto não encontrado');
    }
    await prisma.produto.delete({ where: { id } });
  } catch (error) {
    throw error;
  }
}
