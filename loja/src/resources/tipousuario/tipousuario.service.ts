import { PrismaClient, TipoUsuario } from '@prisma/client';
import { CreateTypeUserDTO, UpdateTypeUserDTO } from './tipousuario.types';

const prisma = new PrismaClient();

export async function getAllUsers(): Promise<TipoUsuario[]> {
  return await prisma.tipoUsuario.findMany();
}

export async function createTypeUser(
  user: CreateTypeUserDTO
): Promise<TipoUsuario> {
  return await prisma.tipoUsuario.create({ data: user });
}

export async function rotuloAlreadyExists(rotulo: string): Promise<boolean> {
  return !!(await prisma.tipoUsuario.findUnique({ where: { rotulo } }));
}

export async function readUser(id: string): Promise<TipoUsuario | null> {
  return await prisma.tipoUsuario.findUnique({ where: { id } });
}

export async function updateUser(
  id: string,
  user: UpdateTypeUserDTO
): Promise<TipoUsuario> {
  return await prisma.tipoUsuario.update({ data: user, where: { id: id } });
}

export async function deleteUser(id: string): Promise<void> {
  try {
    const user = await prisma.tipoUsuario.findUnique({ where: { id } });
    if (!user) {
      throw new Error('tipo de de usuário não encontrado');
    }
    await prisma.tipoUsuario.delete({ where: { id } });
  } catch (error) {
    throw error;
  }
}
