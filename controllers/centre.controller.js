const Centre = require("../models/centre.model");

const addNewCenter = async (req, res) => {
  try {
    let { nom, email, phoneNumber, address, responsable } = req.body;
    let newCenter = new Centre({
      nom: nom,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      responsable: responsable,
    });
    let result = await newCenter.save();
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

const getAllCenters = async (req, res) => {
  try {
    let result = await Centre.find().populate("responsable", "-password -role");
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

const deleteCenter = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Centre.findByIdAndDelete(id);
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
const updateCenter = async (req, res) => {
  try {
    let { id } = req.params;
    let { ...dataToUpdate } = req.body;
    let result = await Centre.findByIdAndUpdate(
      id,
      { ...dataToUpdate },
      { new: true }
    );
    res.json({
      success: true,
      result: result,
    });
  } catch (err) {}
};

module.exports = {
  addNewCenter,
  getAllCenters,
  deleteCenter,
  updateCenter,
};
