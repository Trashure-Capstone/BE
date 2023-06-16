const router = require("express").Router();
const jualSampahController = require("../controllers/jualSampahController");
const imgUpload = require('../controllers/createJualSampahController');
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
      error: false,
      message: 'Created successfully',
    });
  }
);

router.get("/", authMiddleware.verifyToken,jualSampahController.getAllJualSampah);
router.get("/:id", authMiddleware.verifyToken,jualSampahController.getJualSampahById);
router.put(
  '/:id',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  jualSampahController.updateJualSampah
);
router.delete(
  '/:id',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  jualSampahController.deleteJualSampah
);

module.exports = router;
