const {
  addNewDomain,
  getAllDomains,
  deleteDomain,
  updateDomain,
} = require("../controllers/domain.controller");

const router = require("express").Router();
const verifToken = require("../utils/verifToken");
router.post("/add", verifToken, addNewDomain);
router.get("/", verifToken, getAllDomains);
router.delete("/delete/:id", verifToken, deleteDomain);
router.put("/edit/:id", verifToken, updateDomain);

module.exports = router;
