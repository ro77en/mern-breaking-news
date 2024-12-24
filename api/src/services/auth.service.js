import User from "../models/User.js";
import jwt from "jsonwebtoken";

const getUserByEmail = (email) =>
  User.findOne({ email: email }).select("+password");

const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.env.SECRET_JWT, { expiresIn: 86400 });

export default { getUserByEmail, generateToken };
