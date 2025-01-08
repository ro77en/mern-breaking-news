import { Router } from "express";
import newsController from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, newsController.getAllPosts);

router.get('/latest', newsController.getLatestNews);

router.get('/:id', newsController.getPostById);

router.post("/", authMiddleware, newsController.createPost);

export default router;
