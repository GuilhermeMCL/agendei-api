import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";

const router = Router();

router.get("/trans", controllerDoctor.Listar);
router.post("/trans", controllerDoctor.Inserir);
router.put("/trans/:id_transp", controllerDoctor.Editar);
router.delete("/trans/:id_transp", controllerDoctor.Excluir);

router.post("/user/register" , controllerUser.Inserir);
router.post("/user/login" , controllerUser.Login);








export default router;