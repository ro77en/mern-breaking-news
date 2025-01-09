import mongoose from "mongoose";
import userService from "../services/user.service.js";
import newsService from "../services/news.service.js";

export const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID" });
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await userService.getById(id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    req.id = id;
    req.user = user;

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const userIsAuthor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await newsService.getById(id);

    if (post.author._id != req.userId) {
      return res
        .status(403)
        .send({ message: "You can not update other people's posts" });
    }

    next();
  } catch (err) {
    res.status(500).send({ messge: err.message });
  }
};
