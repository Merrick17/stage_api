const mongoose = require("mongoose");
const SubscribtionSchema = new mongoose.Schema({
  sendedBy: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  course: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  confirmed: {
    required: true,
    type: String,
    default: "EN_COURS",
  },
});

module.exports = mongoose.model("Subscribtion", SubscribtionSchema);
