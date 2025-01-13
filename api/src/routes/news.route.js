import { Router } from "express";
import newsController from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { userIsAuthor } from "../middlewares/global.middlewares.js";

const router = Router();

router.get("/", authMiddleware, newsController.getAllPosts);
router.get("/latest", newsController.getLatestNews);
router.get("/search", newsController.getPostByTitle);
router.get("/by-user", authMiddleware, newsController.getPostByUser);
router.post("/", authMiddleware, newsController.createPost);
router.patch(
  "/:id",
  authMiddleware,
  userIsAuthor,
  newsController.updatePostById
);
router.delete(
  "/:id",
  authMiddleware,
  userIsAuthor,
  newsController.deletePostById
);
router.get("/:id", newsController.getPostById);
router.patch("/like/:postId", authMiddleware, newsController.likePostById);
router.patch(
  "/comment/:postId",
  authMiddleware,
  newsController.addCommentByPostId
);
router.patch(
  "/comment/:postId/:commentId",
  authMiddleware,
  newsController.removeCommentById
);

export default router;
