import express from "express";
import userController from "../controller/userControllers.js";
import petsController from "../controller/petsControllers.js";

const router = express.Router();
/** Rota home**/

/** Rotas dos usuários**/

router.get("/usuarios", userController.Listar);
router.get("/usuario/:id", userController.getOne);
router.post("/usuario/cadastro", userController.Cadastrar);
router.put("/usuario/:id", userController.Atualizar);
router.delete("/deletar/usuario/:id", userController.Deletar);

/** Rotas dos Pets**/
router.get("/pets", petsController.Listar);
router.post("/pet/cadastro/", petsController.Cadastrar);
router.get("/pet/:id", petsController.getOne);
router.delete("/deletar/pet/:id", petsController.Deletar);

export default router;
