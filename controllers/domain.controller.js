const Domain = require("../models/domaine.model");

const addNewDomain = async (req, res) => {
  try {
    let { title, description } = req.body;
    let newDomain = new Domain({
      title,
      description,
    });
    let result = await newDomain.save();
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

const getAllDomains = async (req, res) => {
  try {
    let result = await Domain.find();
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

const updateDomain = async (req, res) => {
  try {
    let { id } = req.params;
    let dataToUpdate = req.body;
    let result = await Domain.findByIdAndUpdate(
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
const deleteDomain = async (req, res) => {
  try {
    let { id } = req.params;

    let result = await Domain.findByIdAndDelete(id);
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
module.exports = { addNewDomain, deleteDomain, updateDomain, getAllDomains };
