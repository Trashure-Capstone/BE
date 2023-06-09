const router = require("express").Router();
const sampahController = require("../controllers/sampahController");

router.get("/", sampahController.getAllSampah);
router.get("/:id", sampahController.getSampahById);
router.post("/", sampahController.createNewSampah);
router.put("/:id", sampahController.updateSampah);
router.delete("/:id", sampahController.deleteSampah);

module.exports = router;
