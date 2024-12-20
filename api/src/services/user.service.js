const User = require("../models/User");

const create = (body) => User.create(body);

const getAll = () => User.find();

const getById = (id) => User.findById(id);

module.exports = {
  create,
  getAll,
  getById,
};
