import { Produto } from '@prisma/client';

type CreateProductDTO = Pick<Produto, 'nome' | 'preco' | 'estoque'>;
type UpdateProductDTO = Pick<Produto, 'nome' | 'preco' | 'estoque'>;

export { CreateProductDTO, UpdateProductDTO };
