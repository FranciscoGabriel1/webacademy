import { Request, Response } from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  emailAlreadyExists,
  readUser,
  updateUser
} from './usuario.service';
import { CreateUserDTO } from './usuario.types';

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
  const user = req.body as CreateUserDTO;
  try {
    if (await emailAlreadyExists(user.email)) {
      return res.status(400).json({ msg: 'Esse email já existe!' });
    }
    const newUser = await createUser(user);
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
    if (!user) res.status(400).json({ msg: 'Usuário nao encontrado' });
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
      currentUser?.email !== user.email &&
      (await emailAlreadyExists(user.email))
    ) {
      return res.status(400).json({ msg: 'Já existe um email assim' });
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
    res.status(200).json({ msg: 'Produto excluído com sucesso!' });
  } catch (error) {
    res.status(500).json(error);
  }
}

export default { index, create, read, update, remove };
