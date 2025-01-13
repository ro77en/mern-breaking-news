import newsService from "../services/news.service.js";

const getAllPosts = async (req, res) => {
  let { limit, offset } = req.query;

  limit = Number(limit);
  offset = Number(offset);

  if (!limit) {
    limit = 5;
  }

  if (!offset) {
    offset = 0;
  }

  try {
    const news = await newsService.getAll(offset, limit);
    const total = await newsService.countNews();
    const currentUrl = req.baseUrl;

    const next = offset + limit;
    const nextUrl =
      next < total
        ? `http://localhost:${currentUrl}?limit=${limit}&offset=${offset}`
        : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl =
      previous != null
        ? `http://localhost:${currentUrl}?limit=${limit}&offset=${previous}`
        : null;

    if (news.lenght === 0) {
      res.status(400).send({
        message: "There are no Posts created",
      });
    }

    res.status(200).send({
      nextUrl,
      previousUrl,
      limit,
      offset,
      total,

      results: news.map((newsItem) => ({
        id: newsItem._id,
        title: newsItem.title,
        text: newsItem.text,
        banner: newsItem.banner,
        likes: newsItem.likes,
        comments: newsItem.comments,
        authorName: newsItem.author.name,
        author: newsItem.author.username,
        avatar: newsItem.author.avatar,
      })),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({
        message: "Submit all fields to create a post",
      });
    }

    await newsService.create({
      title,
      text,
      banner,
      author: req.userId,
    });

    res.status(201).send("Post created!");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getLatestNews = async (req, res) => {
  try {
    const latestPost = await newsService.latestNews();

    if (!latestPost) {
      res.status(400).send("There are no posts found.");
    }

    res.send({
      latestPost: {
        id: latestPost._id,
        title: latestPost.title,
        text: latestPost.text,
        banner: latestPost.banner,
        likes: latestPost.likes,
        comments: latestPost.comments,
        authorName: latestPost.author.name,
        author: latestPost.author.username,
        avatar: latestPost.author.avatar,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await newsService.getById(id);
    res.status(200).send({
      post: {
        id: post._id,
        title: post.title,
        text: post.text,
        banner: post.banner,
        likes: post.likes,
        comments: post.comments,
        authorName: post.author.name,
        author: post.author.username,
        avatar: post.author.avatar,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getPostByTitle = async (req, res) => {
  try {
    const { title } = req.query;
    const postsFound = await newsService.getByTitle(title);

    if (postsFound.lenght === 0) {
      return res.status(400).send({
        message: "There are no Posts with the searched title",
      });
    }

    return res.status(200).send({
      results: postsFound.map((post) => ({
        id: post._id,
        title: post.title,
        text: post.text,
        banner: post.banner,
        likes: post.likes,
        comments: post.comments,
        authorName: post.author.name,
        author: post.author.username,
        avatar: post.author.avatar,
      })),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getPostByUser = async (req, res) => {
  try {
    const id = req.userId;
    const postsFound = await newsService.getByUser(id);

    return res.status(200).send({
      results: postsFound.map((post) => ({
        id: post._id,
        title: post.title,
        text: post.text,
        banner: post.banner,
        likes: post.likes,
        comments: post.comments,
        authorName: post.author.name,
        author: post.author.username,
        avatar: post.author.avatar,
      })),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updatePostById = async (req, res) => {
  try {
    const { title, text, banner } = req.body;
    const { id } = req.params;

    if (!title && !banner && !text) {
      return res
        .status(400)
        .send({ message: "Submit all fields to update the post" });
    }

    await newsService.updateById(id, title, text, banner);
    return res.status(200).send({ message: "Post updated successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    await newsService.deleteById(id);
    return res.status(200).send({ message: "Post successfully deleted" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const likePostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.userId;

    const postLiked = await newsService.likePost(postId, userId);

    if (!postLiked) {
      await newsService.deleteLike(postId, userId);
      return res.status(200).send({ message: "Like removed." });
    }

    res.status(200).send({ message: "Post liked!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const addCommentByPostId = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.userId;
    const { comment } = req.body;

    if (!comment) {
      return res
        .status(400)
        .send({ message: "You can not add empty comments" });
    }
    await newsService.addComment(postId, userId, comment);
    res.status(200).send("Comment added!");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default {
  getAllPosts,
  createPost,
  getLatestNews,
  getPostById,
  getPostByTitle,
  getPostByUser,
  updatePostById,
  deletePostById,
  likePostById,
  addCommentByPostId,
};
