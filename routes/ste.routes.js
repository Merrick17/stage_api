const express = require("express");
const {
  addNewSte,
  getAllSte,
  deleteSte,
  updateSte,
} = require("../controllers/ste.controller");

const router = express.Router();

router.post("/add", addNewSte);
router.get("/", getAllSte);
router.delete("/delete/:id", deleteSte);
router.put("/update/:id", updateSte);

module.exports = router;
