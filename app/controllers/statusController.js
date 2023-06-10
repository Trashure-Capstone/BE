const statusService = require("../services/statusService");

class StatusController {
  async getAllStatus(req, res) {
    try {
      const status = await statusService.getAllStatus();
      res.status(200).json({
        status: "success get status",
        data: status,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed get status",
        message: err.message,
      });
    }
  }
  async createStatus(req, res) {
    try {
      const status = await statusService.createStatus(req.body);
      res.status(201).json({
        status: "success add status",
        data: status,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed add status",
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
        status: "success update status",
        data: status,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed update status",
        message: err.message,
      });
    }
  }
  async deleteStatus(req, res) {
    try {
      const status = await statusService.deleteStatus(req.params.id);
      res.status(200).json({
        status: "success delete status",
        data: status,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed delete status",
        message: err.message,
      });
    }
  }
}

module.exports = new StatusController();
