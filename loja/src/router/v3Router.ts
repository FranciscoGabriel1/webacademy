import { Router } from 'express';
import tipousuarioRouter from '../resources/tipousuario/tipousuario.router';

const router = Router();

router.use('/tipousuario', tipousuarioRouter);

export default router;
