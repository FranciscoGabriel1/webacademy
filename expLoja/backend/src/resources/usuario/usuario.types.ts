import { Usuario } from "@prisma/client";

<<<<<<< Updated upstream
export type CreateUsuarioDto = Pick<Usuario, 'nome' | 'email' | 'senha' | 'tipoUsuarioId'>;
export type UpdateUsuarioDto = Pick<Usuario, 'nome' | 'email' | 'senha'>;
=======
export type CreateUsuarioDTO = Pick<
  Usuario,
  "nome" | "email" | "senha" | "tipoUsuarioId"
>;
>>>>>>> Stashed changes
