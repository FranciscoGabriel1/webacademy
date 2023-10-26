import { PrismaClient, Usuario } from '@prisma/client';
import { CreateUserDTO, UpdateUserDTO } from './usuario.types';

const prisma = new PrismaClient();

export async function getAllUsers(): Promise<Usuario[]> {
  return await prisma.usuario.findMany({
    include: {
      tipoUsuario: true // Inclui as informações do TipoUsuario relacionado
    }
  });
}

export async function createUser(user: CreateUserDTO): Promise<Usuario> {
  return await prisma.usuario.create({ data: user });
}

export async function emailAlreadyExists(email: string): Promise<boolean> {
  return !!(await prisma.usuario.findUnique({ where: { email } }));
}

export async function readUser(id: string): Promise<Usuario | null> {
  return await prisma.usuario.findUnique({ where: { id } });
}

export async function updateUser(
  id: string,
  user: UpdateUserDTO
): Promise<Usuario> {
  return await prisma.usuario.update({ data: user, where: { id: id } });
}

export async function deleteUser(id: string): Promise<void> {
  try {
    const user = await prisma.usuario.findUnique({ where: { id } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    await prisma.usuario.delete({ where: { id } });
  } catch (error) {
    throw error;
  }
}
