const userService = require("../services/user.service");

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

const getUserById = (req, res) => {
  const user = req.user;

  res.status(200).send(user);
};

const updateUser = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name && !username && !email && !password && !avatar && !background) {
    return res.status(400).send({ message: "Submit at least one field for update" });
  }

  const {id, user} = req;

  await userService.update(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  );

  res.status(200).send({
    message: "User updated successfully",
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
};
