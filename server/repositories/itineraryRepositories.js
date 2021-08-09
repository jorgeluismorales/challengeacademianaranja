const Itinerary = require("../database/models/itineraryModel");

const getAll = async () => await Itinerary.find();
const count = async () => await Itinerary.countDocuments();
const getOne = async (id) => await Itinerary.findById(id);
const getItinerariesByCity = async (id) => await Itinerary.find({ cityId: id }).populate("City");
const createItinerary = async (itinerary) => await itinerary.save();

module.exports = {
  getAll,
  getOne,
  getItinerariesByCity,
  count,
  createItinerary,
};
