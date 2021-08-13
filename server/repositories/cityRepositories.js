const City = require("../database/models/cityModel");

const getAll = async () => await City.find();
const count = async () => await City.countDocuments();
const getOne = async (id) => await City.findById(id);
const findOneCity = async (name) => await City.findOne({ name: name });
const getCityByName = async (name) => await City.find({ name: name });
const createCity = async (city) => await city.save();

module.exports = {
  getAll,
  getOne,
  getCityByName,
  count,
  createCity,
  findOneCity
};
