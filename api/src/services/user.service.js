import User from "../models/User.js";

const create = (body) => User.create(body);

const getAll = () => User.find();

const getById = (id) => User.findById(id);

const getByEmail = (email) => User.findOne({ email });

const update = (id, name, username, email, password, avatar, background) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
  );

export default {
  create,
  getAll,
  getById,
  getByEmail,
  update,
};
