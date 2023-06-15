const statusService = require("../services/statusService");

class StatusController {
  async getAllStatus(req, res) {
    try {
      const status = await statusService.getAllStatus();
      res.status(200).json({
        error: false,
        message: "success get status",
        data: status,
      });
    } catch (err) {
      res.status(400).json({
        error: true,
        message: err.message,
      });
    }
  }
  async createStatus(req, res) {
    try {
      const status = await statusService.createStatus(req.body);
      res.status(201).json({
        error: false,
        message: "success add status"
      });
    } catch (err) {
      res.status(400).json({
        error: true,
        message: err.message,
      });
    }
  }
  async updateStatusName(req, res) {
    try {
      const status = await statusService.updateStatusName(
        req.body,
        req.params.id
      );
      res.status(200).json({
        error: false,
        message: "success update status",
        data: status,
      });
    } catch (err) {
      res.status(400).json({
        error: true,
        message: err.message,
      });
    }
  }
  async deleteStatus(req, res) {
    try {
      const status = await statusService.deleteStatus(req.params.id);
      res.status(200).json({
        error: false,
        message: "success delete status",
        data: status,
      });
    } catch (err) {
      res.status(400).json({
        error: true,
        message: err.message,
      });
    }
  }
}

module.exports = new StatusController();
