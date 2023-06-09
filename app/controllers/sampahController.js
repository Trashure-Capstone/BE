const sampahService = require("../services/sampahService");

class SampahController {
  async createNewSampah(req, res) {
    try {
      const sampah = await sampahService.createNewSampah(req.body);
      res.status(201).json({
        status: "success add sampah",
        data: sampah,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed add sampah",
        message: err.message,
      });
    }
  }
  async updateSampah(req, res) {
    try {
      const sampah = await sampahService.updateSampah(req.body, req.params.id);
      res.status(200).json({
        status: "success update sampah",
        data: sampah,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed update sampah",
        message: err.message,
      });
    }
  }
  async getAllSampah(req, res) {
    try {
      const sampah = await sampahService.getAllSampah();
      res.status(200).json({
        status: "success get all sampah",
        data: sampah,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed get all sampah",
        message: err.message,
      });
    }
  }
  async getSampahById(req, res) {
    try {
      const sampah = await sampahService.getSampahById(req.params.id);
      res.status(200).json({
        status: "success get sampah by id",
        data: sampah,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed get sampah by id",
        message: err.message,
      });
    }
  }
  async deleteSampah(req, res) {
    try {
      const sampah = await sampahService.deleteSampah(req.params.id);
      res.status(200).json({
        status: "success delete sampah",
        data: sampah,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed delete sampah",
        message: err.message,
      });
    }
  }
}

module.exports = new SampahController();
