import { Request, Response } from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  nameAlreadyExists,
  readProduct,
  updateProduct
} from './produto.service';
import { CreateProductDTO } from './produto.types';

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
    if (await nameAlreadyExists(product.nome)) {
      return res.status(400).json({ msg: 'Esse produto já existe!' });
    }
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
async function update(req: Request, res: Response) {
  const id = req.params.id;
  const product = req.body;

  try {
    const currentProduct = await readProduct(id);
    if (
      currentProduct?.nome !== product.nome &&
      (await nameAlreadyExists(product.nome))
    ) {
      return res
        .status(400)
        .json({ msg: 'Já existe um produto com esse nome' });
    }
    const updatedProduct = await updateProduct(id, product);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
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
