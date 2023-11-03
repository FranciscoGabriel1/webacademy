import { Produto } from '@prisma/client';

type CreateProductDTO = Pick<
  Produto,
  'Modelo' | 'Fabricante' | 'PrecoBase' | 'QuantidadeDisponivel'
>;

type UpdateProductDTO = Pick<
  Produto,
  'Modelo' | 'Fabricante' | 'PrecoBase' | 'QuantidadeDisponivel'
>;

export { CreateProductDTO, UpdateProductDTO };
