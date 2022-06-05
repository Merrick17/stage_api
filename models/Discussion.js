const mongoose = require("mongoose");
const DiscussionModel = new mongoose.Schema(
  {
    firstUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    secondUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    messageList: [
      {
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        receiver: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        message: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Discussion", DiscussionModel);
