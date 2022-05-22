const mongoose = require("mongoose");
const SteSchema = new mongoose.Schema(
  {
    nomSte: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    addresse: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    responsable: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ste", SteSchema);
