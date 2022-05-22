const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema(
  {
    title: { type: String },
    desc: { type: String },
    domain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Domain",
    },
    price: { type: Number, required: true },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Centre",
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
