import News from "../models/News.js";

const create = (body) => News.create(body);

const getAll = () => News.find();

export default {
    create,
    getAll
}