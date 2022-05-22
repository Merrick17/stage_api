const express = require("express");
const {
  addNewParticipation,
  getAllParticipationByOffer,
  getAllParticipationByUser,
  changeParticipationState,
} = require("../controllers/participiant.controller");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.post("/add", upload.single("resume"), addNewParticipation);
router.get("/offre/:offre", getAllParticipationByOffer);
router.get("/user/:user", getAllParticipationByUser);
router.delete("/update/:id", changeParticipationState);

module.exports = router;
