const mongoose = require("mongoose");

const OffreSchema = new mongoose.Schema(
  {
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ste",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    offerType: {
      type: String,
      required: true,
      default: "STAGE",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Offre", OffreSchema);
