const BaseController = require("@controllers/baseController");
const UserRepository = require("@repositories/userRepository");

class UserController extends BaseController {}

module.exports = new UserController(UserRepository);
