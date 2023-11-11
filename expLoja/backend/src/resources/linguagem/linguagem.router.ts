import { Router } from "express";

import linguagemController from "./linguagem.controller";

import validate from "../../middlewares/validate";
import linguagemSchema from "./linguagem.schema";

const router = Router();

router.post("/", validate(linguagemSchema), linguagemController.change);
router.get("/", linguagemController.getLinguagem);

export default router;
