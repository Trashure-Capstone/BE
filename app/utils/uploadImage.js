const cloudinary = require("../middleware/cloudinary");

const regularOptions = {
  use_filename: true,
  unique_filename: false,
  overwirite: false,
};

const uploadJualmage = async (file) => {
  regularOptions.folder = "erp/sell/";
  const options = regularOptions;

  const result = await cloudinary.uploader.upload(file, options);
  return result.secure_url;
};

module.exports = { uploadJualmage };
