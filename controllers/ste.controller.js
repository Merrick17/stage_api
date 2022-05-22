const Ste = require("../models/ste.model");

const addNewSte = async (req, res) => {
  try {
    let { nomSte, addresse, phone, responsable, email } = req.body;
    let newSte = new Ste({
      nomSte,
      addresse,
      phone,
      responsable,
      email,
    });
    let result = await newSte.save();
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

const getAllSte = async (req, res) => {
  try {
    let result = await Ste.find().populate("responsable");
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
const deleteSte = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Ste.findByIdAndDelete(id);
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
const updateSte = async (req, res) => {
  try {
    let { id } = req.params;
    let dataToUpdate = req.body;
    let result = await Ste.findByIdAndUpdate(id, { ...dataToUpdate });
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
module.exports = { deleteSte, getAllSte, addNewSte, updateSte };
