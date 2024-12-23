const route = require("express").Router();
const userController = require("../controllers/user.controller");

const {validId, validUser} = require('../middlewares/global.middlewares');

route.get('/', userController.getAllUsers);

route.get('/:id', validId, validUser, userController.getUserById);

route.post("/", userController.createUser);

route.patch('/:id', validId, validUser, userController.updateUser);

module.exports = route;
