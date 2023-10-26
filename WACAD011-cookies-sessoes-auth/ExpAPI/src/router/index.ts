import express from 'express';
import v1Router from './v1Router';
import v2Router from './v2Router';
import v3Router from './v3Router';

const router = express.Router();

router.use('/v1', v1Router);
router.use('/v2', v2Router);
router.use('/v3', v3Router);

export default router;
