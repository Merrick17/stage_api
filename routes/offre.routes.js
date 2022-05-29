const express = require("express");
const {
  addOffre,
  getAllOffers,
  getAllOffersBySte,
  updateOffre,
  deleteOffre,
  getAllOffersByType,
} = require("../controllers/offre.controller");
const router = express.Router();

router.post("/add", addOffre);
router.get("/", getAllOffers);
router.get("/ste/:id", getAllOffersBySte);
router.put("/edit/:id", updateOffre);
router.delete("/delete/:id", deleteOffre);
router.get("/:type", getAllOffersByType);
module.exports = router;
