const mongoose = require("mongoose");
const ParticipationSchema = new mongoose.Schema({
  resume: {
    type: String,
    required: true,
  },
  sendedBy: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  offre: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Offre",
  },
  confirmed: {
    required: true,
    type: String,
    default: "EN_COURS",
  },
});

module.exports = mongoose.model("Participation", ParticipationSchema);
