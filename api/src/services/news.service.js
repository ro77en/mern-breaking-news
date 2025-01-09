import News from "../models/News.js";

const create = (body) => News.create(body);

const getAll = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("author");

const getById = (id) => News.findById(id).populate("author");

const countNews = () => News.countDocuments();

const latestNews = () => News.findOne().sort({ _id: -1 }).populate("author");

const getByTitle = (title) =>
  News.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("author");

const getByUser = (userId) =>
  News.find({
    author: userId,
  })
    .sort({ _id: -1 })
    .populate("author");

const updateById = (id, title, text, banner) =>
  News.findOneAndUpdate(
    { _id: id },
    { title: title, text: text, banner: banner },
    { rawResult: true }
  );

const deleteById = (id) => News.findOneAndDelete({ _id: id });

export default {
  create,
  getAll,
  getById,
  countNews,
  latestNews,
  getByTitle,
  getByUser,
  updateById,
  deleteById,
};
