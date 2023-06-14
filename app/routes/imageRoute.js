const express = require('express');
const router = express.Router();
const Multer = require('multer');
const imgUpload = require('../controllers/uploadImgController');
const authMiddleware = require('../middleware/authMiddleware');

const multer = Multer({
  storage: Multer.MemoryStorage,
  fileSize: 5 * 1024 * 1024,
});

// router.post(
//   '/',
//   multer.single('image'),
//   authMiddleware.verifyToken,
//   imgUpload.uploadToGcs,
//   (req, res, next) => {
//     const data = req.body;
//     const file = req.file;

//     if (file) {
//       data.imageUrl = file.cloudStoragePublicUrl;
//     }

//     res.send({
//       message: 'Upload was successful',
//     });
//   }
// );

module.exports = router;