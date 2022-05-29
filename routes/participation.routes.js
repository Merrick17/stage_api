const express = require("express");
const {
  addNewParticipation,
  getAllParticipationByOffer,
  getAllParticipationByUser,
  changeParticipationState,
  deleteParticipation,
  getAllParticipationList,
} = require("../controllers/participiant.controller");
const multer = require("multer");
const verifToken = require("../utils/verifToken");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/[/\\:]/g, "_") + file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,

  onFileUploadStart: function (file) {
    console.log(file.originalname + " is starting ...");
  },
});

const router = express.Router();

router.post("/add", verifToken, upload.single("resume"), addNewParticipation);
router.get("/offre/:offre", verifToken, getAllParticipationByOffer);
router.get("/user/:user", verifToken, getAllParticipationByUser);
router.put("/update/:id", verifToken, changeParticipationState);
router.delete("/delete/:id", verifToken, deleteParticipation);
router.get("/", getAllParticipationList);

module.exports = router;
