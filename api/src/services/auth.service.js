import User from "../models/User.js";

const getUserByEmail = (email) =>
  User.findOne({ email: email }).select("+password");

export default { getUserByEmail };
