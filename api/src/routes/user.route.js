import userController from "../controllers/user.controller.js";
import express from "express";
import { validId, validUser } from "../middlewares/global.middlewares.js";

const router = express.Router();

router.get("/", userController.getAllUsers);

router.get("/:id", validId, validUser, userController.getUserById);

router.post("/", userController.createUser);

router.patch("/:id", validId, validUser, userController.updateUser);

export default router;
