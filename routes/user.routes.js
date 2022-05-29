const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
  changeUserState,
} = require("../controllers/user.controller");
const verifToken = require("../utils/verifToken");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", verifToken, getAllUsers);
router.delete("/delete/:id", verifToken, deleteUser);
router.put("/switch/:id", verifToken, changeUserState);
module.exports = router;
