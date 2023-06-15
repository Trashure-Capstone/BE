const jualSampahService = require('../services/jualSampahService');

class JualSampahController {
  async getAllJualSampah(req, res) {
    try {
      const id_user = req.user.id;
      const jualSampah = await jualSampahService.getAllJualSampah(id_user);
      res.status(200).json({
        error: false,
        data: {
          jualSampah,
        },
      });
    } catch (err) {
      res.status(400).json({
        error: true,
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
        error: false,
        data: jualSampah,
      });
    } catch (err) {
      res.status(400).json({
        error: true,
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
        error: false,
        message: 'success update jual sampah',
      });
    } catch (err) {
      res.status(400).json({
        error: true,
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
        error: false,
        message: 'success delete jual sampah',
      });
    } catch (err) {
      res.status(400).json({
        error: true,
        message: err.message,
      });
    }
  }
}

module.exports = new JualSampahController();
