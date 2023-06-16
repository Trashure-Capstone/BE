const sampahService = require('../services/sampahService');

class SampahController {
  async createNewSampah(req, res) {
    try {
      const sampah = await sampahService.createNewSampah(req.body);
      res.status(201).json({
        Error: false,
        message: 'Success add sampah',
        data: sampah,
      });
    } catch (err) {
      res.status(400).json({
        status: 'Failed Add Sampah',
        message: err.message,
      });
    }
  }
  async updateSampah(req, res) {
    try {
      const sampah = await sampahService.updateSampah(req.body, req.params.id);
      res.status(200).json({
        Error: false,
        message: 'Success Update Sampah',
      });
    } catch (err) {
      res.status(400).json({
        Error: true,
        message: err.message,
      });
    }
  }
  async getAllSampah(req, res) {
    try {
      const sampah = await sampahService.getAllSampah();
      res.status(200).json({
        Error: false,
        message: 'Success GET All Sampah',
        data: sampah,
      });
    } catch (err) {
      res.status(400).json({
        Error: false,
        message: err.message,
      });
    }
  }
  async getSampahById(req, res) {
    try {
      const sampah = await sampahService.getSampahById(req.params.id);
      res.status(200).json({
        Error: false,
        message: 'Success GET Sampah by Id',
        data: sampah,
      })
    } catch (err) {
      res.status(400).json({
        Error: true,
        message: err.message,
      });
    }
  }
  async getSampahByName(req, res) {
    try {
      const sampah = await sampahService.getSampahByName(req.params.name);
      res.status(200).json({
        Error: false,
        message: 'success get sampah by name',
        data: sampah,
      });
    } catch (err) {
      res.status(400).json({
        Error: true,
        message: err.message,
      });
    }
  }
  async deleteSampah(req, res) {
    try {
      const sampah = await sampahService.deleteSampah(req.params.id);
      res.status(200).json({
        Error: false,
        message: 'success delete sampah',
      });
    } catch (err) {
      res.status(400).json({
        Error: true,
        message: err.message,
      });
    }
  }
}

module.exports = new SampahController();
