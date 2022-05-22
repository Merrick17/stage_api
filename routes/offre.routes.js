const express = require("express");
const {
  addOffre,
  getAllOffers,
  getAllOffersBySte,
  updateOffre,
  deleteOffre,
} = require("../controllers/offre.controller");
const router = express.Router();

router.post("/add", addOffre);
router.get("/", getAllOffers);
router.get("/ste/:id", getAllOffersBySte);
router.put("/edit/:id", updateOffre);
router.delete("/delete/:id", deleteOffre);
module.exports = router;
