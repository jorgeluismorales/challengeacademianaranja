const User = require("../database/models/userModel");

const getAll = async () => await User.find({});
const count = async () => await User.countDocuments();
const getOne = async (id) => await User.findById(id);
const getUserByName = async (name) => await User.findOne({ firstName: name });
const getUserByEmail = async (mail) => await User.findOne({ mail });
const createUser = async (user) => await user.save();

module.exports = {
  getAll,
  getOne,
  count,
  createUser,
  getUserByName,
  getUserByEmail,
};
