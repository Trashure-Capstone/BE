const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const Multer = require('multer');
const imgUpload = require('../models/imgUpload');

const multer = Multer({
  storage: Multer.MemoryStorage,
  fileSize: 5 * 1024 * 1024,
});

// TODO: Sesuaikan konfigurasi database
const connection = mysql.createConnection({
  host: '34.128.78.184',
  user: 'root',
  database: 'mydatabase',
  password: ">Sr'VF4kVuoa_yvs",
});

router.post(
  '/uploadImage',
  multer.single('image'),
  imgUpload.uploadToGcs,
  (req, res, next) => {
    const data = req.body;
    if (req.file && req.file.cloudStoragePublicUrl) {
      data.imageUrl = req.file.cloudStoragePublicUrl;
    }

    res.send(data);
  }
);

module.exports = router;
