import News from "../models/News.js";

const create = (body) => News.create(body);

const getAll = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("author");

const countNews = () => News.countDocuments();

export default {
  create,
  getAll,
  countNews,
};
