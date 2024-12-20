const route = require("express").Router();
const userController = require("../controllers/user.controller");

route.get('/', userController.getAllUsers);

route.get('/:id', userController.getUserById);

route.post("/", userController.createUser);

module.exports = route;
