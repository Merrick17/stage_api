const Subscribtion = require("../models/subscription.model");

const addSubscribtion = async (req, res) => {
  try {
    let { sendedBy, course } = req.body;
    let newSub = new Subscribtion({
      sendedBy,
      course,
    });
    let result = await newSub.save();
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: true,
      result: result,
    });
  }
};

const getAllSubscribtions = async (req, res) => {
  try {
    let result = await Subscribtion.find()
      .populate("course")
      .populate("sendedBy");
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: true,
      result: result,
    });
  }
};

const getAllSubscribtionsByUser = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Subscribtion.find({ sendedBy: id })
      .populate("course")
      .populate("sendedBy");
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: true,
      result: result,
    });
  }
};
const changeSubscribtionState = async (req, res) => {
  try {
    let { id } = req.params;
    let { status } = req.body;
    let result = await Subscribtion.findByIdAndUpdate(
      id,
      {
        confirmed: status,
      },
      { new: true }
    );

    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: true,
      result: result,
    });
  }
};

module.exports = {
  getAllSubscribtions,
  addSubscribtion,
  getAllSubscribtionsByUser,
  changeSubscribtionState,
};
