const mongoose = require("mongoose");
const ParticipationSchema = new mongoose.Schema({
  resume: {
    type: String,
    required: true,
  },
  sendedBy: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
  offre: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
  confirmed: {
    required: true,
    type: String,
    default: "EN_COURS",
  },
});

module.exports = mongoose.model("Participation", ParticipationSchema);
