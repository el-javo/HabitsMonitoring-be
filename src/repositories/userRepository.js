const BaseRepository = require("@repositories/baseRepository");
const userModel = require("@models/userModel");

class UserRepository extends BaseRepository {}

module.exports = new UserRepository(userModel);
