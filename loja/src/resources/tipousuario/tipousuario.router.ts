import Router from 'express';
import tipousuarioController from './tipousuario.controller';

const router = Router();

router.get('/', tipousuarioController.index);
router.post('/', tipousuarioController.create);
router.get('/:id', tipousuarioController.read);
router.put('/:id', tipousuarioController.update);
router.delete('/:id', tipousuarioController.remove);

export default router;
