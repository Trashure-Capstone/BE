const router = require("express").Router();
const jualSampahController = require("../controllers/jualSampahController");
const imgUpload = require('../controllers/uploadImgController');
const authMiddleware = require('../middleware/authMiddleware');
const MulterSampah = require("multer");

const multer = MulterSampah({
  storage: MulterSampah.MemoryStorage,
  fileSize: 5 * 1024 * 1024,
});

router.post(
  '/',
  multer.single('image'),
  authMiddleware.verifyToken,
  imgUpload.uploadToGcs,
  (req, res, next) => {
    const data = req.body;
    const file = req.file;

    if (file) {
      data.imageUrl = file.cloudStoragePublicUrl;
    }

    res.send({
      message: 'Upload was successful',
    });
  }
);

router.get("/", jualSampahController.getAllJualSampah);
router.get("/:id", jualSampahController.getJualSampahById);
router.put("/:id", jualSampahController.updateJualSampah);
router.delete("/:id", jualSampahController.deleteJualSampah);

module.exports = router;
