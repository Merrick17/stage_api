const Discussion = require("../models/Discussion");
const addNewMessge = async (req, res) => {
  try {
    let { sender, receiver, message } = req.body;
    let discussion = await Discussion.findOne({
      firstUser: { $in: [sender, receiver] },
      secondUser: { $in: [sender, receiver] },
    });
    if (discussion) {
      let newMeessage = {
        sender,
        receiver,
        message,
      };
      let result = await Discussion.findByIdAndUpdate(
        discussion._id,
        {
          $push: { messageList: [...discussion.messageList, ...newMeessage] },
        },
        {
          new: true,
        }
      );
      res.json({
        success: true,
        result: result,
      });
    } else {
      let newDiscussion = new Discussion({
        firstUser: sender,
        secondUser: receiver,
        messageList: [
          {
            sender,
            receiver,
            message,
          },
        ],
      });
      let result = await newDiscussion.save();
      res.json({
        success: true,
        result: result,
      });
    }
    // let newMessage = new Message({
    //   sender,
    //   receiver,
    //   message,
    // });
    // let result = await newMessage.save();
    // res.json({
    //   result,
    //   success: true,
    // });
  } catch (error) {
    res.json({
      result: error.message,
      success: false,
    });
  }
};
