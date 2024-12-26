import newsService from "../services/news.service.js";

const getAllPosts = async (req, res) => {
  try {
    const news = await newsService.getAll();

    if (news.lenght === 0) {
      res.status(400).send({
        message: "There are no Posts created",
      });
    }

    res.status(200).send(news);
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
      author: { _id: "6765817abda89c5b62efd1e8" },
    });

    res.status(201).send("Post created!");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default {
  getAllPosts,
  createPost,
};
