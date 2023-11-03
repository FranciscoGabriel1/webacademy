import { Router } from "express";
import validate from "../../middleware/validate";
import linguagemController from "../linguagem/linguagem.controller";
import { linguagemSchema } from "./linguagem.schemas";

const router = Router();

router.post("/change", validate(linguagemSchema),linguagemController.changeLang);