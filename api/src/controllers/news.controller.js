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

export default {
  getAllPosts,
  createPost,
  getLatestNews,
};
