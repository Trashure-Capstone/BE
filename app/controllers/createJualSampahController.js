'use strict';
const { Storage } = require('@google-cloud/storage');
const path = require('path');
const jualSampahService = require('../services/jualSampahService');
const middleware = require('../middleware/authMiddleware');
const { response } = require('express');

const pathKey = path.resolve('./serviceaccountkeys.json');

// TODO: Sesuaikan konfigurasi Storage
const gcs = new Storage({
  projectId: 'trashure-389107',
  keyFilename: pathKey,
});

// TODO: Tambahkan nama bucket yang digunakan
const bucketName = 'trashurebucket';
const bucket = gcs.bucket(bucketName);

function getPublicUrl(filename) {
  return 'https://storage.googleapis.com/' + bucketName + '/dic_js/' + filename;
}

let ImgUpload = {};

ImgUpload.uploadToGcs = (req, res, next) => {
  if (!req.file) return next();

  const gcsname = Date.now() + '_' + req.file.originalname.split(' ').join('-');
  const file = bucket.file('dic_js/' + gcsname);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  stream.on('error', (err) => {
    req.file.cloudStorageError = err;
    next(err);
  });

  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname;
    req.body.foto_sampah = getPublicUrl(gcsname);
    // get user_id from authMiddleware
    req.body.id_user = req.user.id;
    jualSampahService.createJualSampah(req.body);
    next();
  });

  stream.end(req.file.buffer);
};

module.exports = ImgUpload;
