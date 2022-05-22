const Participation = require("../models/participation.model");

const addNewParticipation = async (req, res) => {
  try {
    let { sendedBy, offre } = req.body;
    let resume = req.file.path;
    let newParticip = new Participation({
      sendedBy,
      offre,
      resume,
    });
    let result = await newParticip.save();
    res.json({ success: true, result: result });
  } catch (error) {
    res.json({ success: false, result: error.message });
  }
};

const getAllParticipationByOffer = async (req, res) => {
  try {
    let { offre } = req.params;

    let result = await Participation.find({ offre: offre });
    res.json({ success: true, result: result });
  } catch (error) {
    res.json({ success: false, result: error.message });
  }
};
const getAllParticipationByUser = async (req, res) => {
  try {
    let { user } = req.params;

    let result = await Participation.find({ sendedBy: user });
    res.json({ success: true, result: result });
  } catch (error) {
    res.json({ success: false, result: error.message });
  }
};
const changeParticipationState = async (req, res) => {
  try {
    let { id } = req.params;
    let { state } = req.body;

    let result = await Participation.findByIdAndUpdate(id, {
      confirmed: state,
    });
    res.json({ success: true, result: result });
  } catch (error) {
    res.json({ success: false, result: error.message });
  }
};
module.exports = {
  getAllParticipationByOffer,
  getAllParticipationByUser,
  addNewParticipation,
  changeParticipationState,
};
