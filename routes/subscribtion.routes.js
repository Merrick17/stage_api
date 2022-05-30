const {
  addSubscribtion,
  getAllSubscribtionsByUser,
  changeSubscribtionState,
} = require("../controllers/subscribtion.controller");

const router = require("express").Router();

router.post("/add", addSubscribtion);
router.get("/:id", getAllSubscribtionsByUser);
router.put("/:id", changeSubscribtionState);

module.exports = router;
