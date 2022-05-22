const express = require("express");
const {
  addNewCouse,
  updateCourse,
  deleteCourse,
  getAllCourses,
} = require("../controllers/course.controller");
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
  fileFilter: fileFilter,
  onFileUploadStart: function (file) {
    console.log(file.originalname + " is starting ...");
  },
});

const router = express.Router();

router.post("/add", verifToken, upload.single("image"), addNewCouse);
router.post("/edit/:id", verifToken, upload.single("image"), updateCourse);
router.delete("/delete/:id", verifToken, deleteCourse);
router.get("/", verifToken, getAllCourses);

module.exports = router;
