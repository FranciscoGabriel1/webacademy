import { Request, Response } from 'express';
import {
  createTypeUser,
  deleteUser,
  getAllUsers,
  rotuloAlreadyExists,
  readUser,
  updateUser
} from './tipousuario.service';
import { CreateTypeUserDTO } from './tipousuario.types';

async function index(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log('error: ', error);
    res.status(500).json(error);
  }
}
async function create(req: Request, res: Response) {
  const user = req.body as CreateTypeUserDTO;
  try {
    if (await rotuloAlreadyExists(user.rotulo)) {
      return res.status(400).json({ msg: 'Esse rotulo já existe!' });
    }
    const newUser = await createTypeUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    console.log('error: ', error);
    res.status(500).json(error);
  }
}
async function read(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const user = await readUser(id);
    if (!user) res.status(400).json({ msg: 'tipo Usuário nao encontrado' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function update(req: Request, res: Response) {
  const id = req.params.id;
  const user = req.body;

  try {
    const currentUser = await readUser(id);
    if (
      currentUser?.rotulo !== user.rotulo &&
      (await rotuloAlreadyExists(user.rotulo))
    ) {
      return res.status(400).json({ msg: 'Já existe um rotulo assim' });
    }
    const updatedUser = await updateUser(id, user);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function remove(req: Request, res: Response) {
  const id = req.params.id;

  try {
    await deleteUser(id);
    res.status(200).json({ msg: 'tipo usuario excluído com sucesso!' });
  } catch (error) {
    res.status(500).json(error);
  }
}

export default { index, create, read, update, remove };
