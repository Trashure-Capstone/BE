const router = require("express").Router();
const jualSampahController = require("../controllers/jualSampahController");
const uploader = require("../middleware/multer");

router.post(
  "/",
  uploader.single("images"),
  jualSampahController.createJualSampah
);
router.get("/", jualSampahController.getAllJualSampah);
router.get("/:id", jualSampahController.getJualSampahById);
router.put("/:id", jualSampahController.updateJualSampah);
router.delete("/:id", jualSampahController.deleteJualSampah);

module.exports = router;
