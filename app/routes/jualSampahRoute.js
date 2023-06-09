const router = require("express").Router();
const jualSampahController = require("../controllers/jualSampahController");

router.post("/", jualSampahController.createJualSampah);
router.get("/", jualSampahController.getAllJualSampah);
router.get("/:id", jualSampahController.getJualSampahById);
router.put("/:id", jualSampahController.updateJualSampah);
router.delete("/:id", jualSampahController.deleteJualSampah);

module.exports = router;
