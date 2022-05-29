const Offre = require("../models/offre.model");

const addOffre = async (req, res) => {
  try {
    let { addedBy, title, description, startDate, endDate, offerType } =
      req.body;
    let newOffre = new Offre({
      addedBy,
      title,
      description,
      startDate,
      endDate,
      offerType,
    });
    let result = await newOffre.save();
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const getAllOffers = async (req, res) => {
  try {
    let result = await Offre.find();
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const getAllOffersByType = async (req, res) => {
  try {
    let { type } = req.params;
    let result = await Offre.find({
      offerType: type,
    }).populate("addedBy");
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const getAllOffersBySte = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Offre.find({ addedBy: id });
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const deleteOffre = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Offre.findByIdAndDelete(id);
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const updateOffre = async (req, res) => {
  try {
    let { id } = req.params;
    let dataToUpdate = req.body;
    let result = await Offre.findByIdAndUpdate(
      id,
      { ...dataToUpdate },
      { new: true }
    );
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
module.exports = {
  deleteOffre,
  getAllOffers,
  getAllOffersBySte,
  addOffre,
  updateOffre,
  getAllOffersByType,
};
