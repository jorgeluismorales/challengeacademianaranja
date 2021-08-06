const City = require("../database/models/city.model");

const getAll = async () => await City.find();
const count = async () => await City.countDocuments();
const getOne = async (id) => await City.findById(id);
const getCityByName = async (name) => await City.find({ name: name });
const createCity = async (city) => await city.save();

module.exports = {
  getAll,
  getOne,
  getCityByName,
  count,
  createCity,
};
