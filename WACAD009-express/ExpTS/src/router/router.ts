import express  from 'express';
import mainController from '../controllers/main';

const router = express.Router();

router.get('/about', mainController.about);
router.get('/lorem/:paragrafos', mainController.lorem);
router.get('/hb1', mainController.hb1);
router.get('/hb2', mainController.hb2);
router.get('/hb3', mainController.hb3);
router.get('/hb4',mainController.hb4);
router.get('/pagina-com-imagem',mainController.paginaComImagem);
router.get('/ui',mainController.ui);

export default router;

/*
router.use("/", (req: Request, res: Response) => {
     res.send("Hello world!");
});
*/
