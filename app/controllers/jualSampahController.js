const jualSampahService = require("../services/jualSampahService");

class JualSampahController {
  async createJualSampah(req, res) {
    try {
      ImgUpload.uploadToGcs(req, res, (err) => {
        if (err) {
          // Handle the error
          throw new Error('Failed to upload file');
        }
        req.body.foto_sampah = req.file.cloudStoragePublicUrl;
      });

      const jualSampah = await jualSampahService.createJualSampah(req.body);
      res.status(201).json({
        status: "success add jual sampah",
        data: jualSampah,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed add jual sampah",
        message: err.message,
      });
    }
  }
  async getAllJualSampah(req, res) {
    try {
      const jualSampah = await jualSampahService.getAllJualSampah();
      res.status(200).json({
        status: "success get all jual sampah",
        data: jualSampah,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed get all jual sampah",
        message: err.message,
      });
    }
  }
  async getJualSampahById(req, res) {
    try {
      const jualSampah = await jualSampahService.getJualSampahById(
        req.params.id
      );
      res.status(200).json({
        status: "success get jual sampah by id",
        data: jualSampah,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed get jual sampah by id",
        message: err.message,
      });
    }
  }
  async updateJualSampah(req, res) {
    try {
      const jualSampah = await jualSampahService.updateJualSampah(
        req.params.id,
        req.body
      );
      res.status(200).json({
        status: "success update jual sampah",
        data: jualSampah,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed update jual sampah",
        message: err.message,
      });
    }
  }
  async deleteJualSampah(req, res) {
    try {
      const jualSampah = await jualSampahService.deleteJualSampah(
        req.params.id
      );
      res.status(200).json({
        status: "success delete jual sampah",
        data: jualSampah,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed delete jual sampah",
        message: err.message,
      });
    }
  }
}

module.exports = new JualSampahController();
