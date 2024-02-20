import { Router } from "express";
import * as usersController from "../controller/usersController";

const router = Router();

router.get("/", usersController.getUsers);
router.get("/:id", usersController.getSingleUser);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.patch("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

export default router;