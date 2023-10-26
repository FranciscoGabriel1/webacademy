import { TipoUsuario } from '@prisma/client';

type CreateTypeUserDTO = Pick<TipoUsuario, 'rotulo'>;
type UpdateTypeUserDTO = Pick<TipoUsuario, 'rotulo'>;

export { CreateTypeUserDTO, UpdateTypeUserDTO };
