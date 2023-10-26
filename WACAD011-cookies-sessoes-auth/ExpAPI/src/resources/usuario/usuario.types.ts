import { Usuario } from '@prisma/client';

type CreateUserDTO = Pick<
  Usuario,
  'nome' | 'email' | 'senha' | 'tipoUsuarioId'
>;
type UpdateUserDTO = Pick<Usuario, 'nome' | 'email' | 'senha'>;

export { CreateUserDTO, UpdateUserDTO };
