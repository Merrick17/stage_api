const User = require("../models/user.model");
const Ste = require("../models/ste.model");
const Center = require("../models/centre.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    let { firstName, lastName, email, password, role, phoneNumber } = req.body;
    let hash = await bcrypt.hash(password, 10);
    let newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hash,
      role,
    });
    let result = await newUser.save();
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      res.json({
        success: false,
        message: "Adresse ou mot de passe incorrect",
      });
    } else {
      let verif = await bcrypt.compare(password, user.password);
      if (!verif) {
        res.json({
          success: false,
          message: "Adresse ou mot de passe incorrect",
        });
      } else {
        let token = jwt.sign({ user: user._id }, "TOKEN_SECRET");
        if (user.role == "STE") {
          let ste = await Ste.findOne({ responsable: user._id });
          console.log("STE", ste);
          res.json({
            success: true,
            result: {
              token: token,
              user: user,
              ste: ste,
            },
          });
        } else if (user.role == "CENTER") {
          let ste =await  Center.findOne({ responsable: user._id });
          res.json({
            success: true,
            result: {
              token: token,
              user: user,
              ste: ste,
            },
          });
        } else {
          res.json({
            success: true,
            result: {
              token: token,
              user: user,
              ste: null,
            },
          });
        }
      }
    }
  } catch (error) {
    console.log("error",error)
    res.json({
      success: false,
      result: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    let result = await User.find().select("-password");
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await User.findByIdAndDelete(id);
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
module.exports = {
  loginUser,
  registerUser,
  getAllUsers,
  deleteUser,
};
