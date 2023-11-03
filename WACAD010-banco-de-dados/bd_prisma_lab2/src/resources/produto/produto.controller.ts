import { Request, Response } from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  readProduct,
  updateProduct
} from './produto.service';
import { CreateProductDTO, UpdateProductDTO } from './produto.types';
import { Decimal } from '@prisma/client/runtime/library';

async function index(req: Request, res: Response) {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function create(req: Request, res: Response) {
  const product = req.body as CreateProductDTO;
  try {
    const newProduct = await createProduct(product);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function read(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const product = await readProduct(id);
    if (!product) res.status(400).json({ msg: 'Produto nao encontrado' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
}
// async function update(req: Request, res: Response) {
//   const id = req.params.id;
//   const product = req.body;

//   try {
//     const updatedProduct = await updateProduct(id, product);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     console.log('error: ', error);
//     res.status(500).json(error);
//   }
// }

async function update(req: Request, res: Response) {
  const id = req.params.id;
  const produto = req.body as UpdateProductDTO;
  try {
    // const produtoAtual = await readProduto(Number(id));
    // if (
    //   produtoAtual?.modelo != produto.modelo &&
    //   (await jaExiste(produto.modelo))
    // ) {
    //   return res
    //     .status(400)
    //     .json({ msg: 'Já Existe um produto com o nome informado' });
    // }
    const produtoAtualizado = await updateProduct(id, produto);
    res.status(204).json(produtoAtualizado);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function remove(req: Request, res: Response) {
  const id = req.params.id;

  try {
    await deleteProduct(id);
    res.status(200).json({ msg: 'Produto excluído com sucesso!' });
  } catch (error) {
    res.status(500).json(error);
  }
}

export default { index, create, read, update, remove };
