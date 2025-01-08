import { Router } from "express";
import newsController from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, newsController.getAllPosts);
router.get('/latest', newsController.getLatestNews);
router.get('/search', newsController.getPostByTitle);
router.post("/", authMiddleware, newsController.createPost);

router.get('/:id', newsController.getPostById);

export default router;
