const User = require("../models/User");

const create = (body) => User.create(body);

const getAll = () => User.find();

const getById = (id) => User.findById(id);

const getByEmail = (email) => User.findOne({ email });

const update = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
  );

module.exports = {
  create,
  getAll,
  getById,
  getByEmail,
  update,
};
