const { Storage } = require('@google-cloud/storage');
const path = require('path');

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
  return 'https://storage.googleapis.com/' + bucketName + '/' + filename;
};

let ImgUpload = {};

ImgUpload.uploadToGcs = (req, next) => {
  if (!req.file) return next();

  const gcsname = Date.now() + '_' + req.file.originalname.split(' ').join('-');
  const file = bucket.file(gcsname);

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
    req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
    next();
  });

  // Create a readable stream from the file data
  stream.end(req.file.buffer);
};


module.exports = ImgUpload;
