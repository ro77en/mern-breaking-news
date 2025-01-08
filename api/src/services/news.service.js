import News from "../models/News.js";

const create = (body) => News.create(body);

const getAll = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("author");

const countNews = () => News.countDocuments();

const latestNews = () => News.findOne().sort({ _id: -1 }).populate("author");

export default {
  create,
  getAll,
  countNews,
  latestNews,
};
