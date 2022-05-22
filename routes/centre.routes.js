const express = require("express");
const {
  addNewCenter,
  getAllCenters,
  deleteCenter,
  updateCenter,
} = require("../controllers/centre.controller");
const verifToken = require("../utils/verifToken");
const router = express.Router();
router.post("/add", verifToken, addNewCenter);
router.get("/", verifToken, getAllCenters);
router.delete("/delete/:id", verifToken, deleteCenter);
router.put("/edit/:id", verifToken, updateCenter);

module.exports = router;
