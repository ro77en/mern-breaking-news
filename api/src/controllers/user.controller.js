const userService = require("../services/user.service");
const mongoose = require("mongoose");

const createUser = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for signin up" });
  }

  const existingUser = await userService.getByEmail(email);
  if (existingUser) {
    return res.status(409).send("Email already registered");
  }

  const user = await userService.create(req.body);

  if (!user) {
    return res.status(500).send({ message: "Error creating User" });
  }

  res.status(201).send({
    message: "User created successfuly!",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAll();

  if (users.length === 0) {
    return res.status(400).send({
      message: "No users found",
    });
  }

  res.status(200).send(users);
};

const getUserById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid ID" });
  }

  const user = await userService.getById(id);

  if (!user) {
    return res.status(404).send({
      message: "User not found",
    });
  }

  res.status(200).send(user);
};

module.exports = { createUser, getAllUsers, getUserById };
