const CruidService = require("../services/crud_test_service");

class CrudTestController {
  async create(req, res, next) {
    try {
      const data = req.body;
      const result = await CruidService.create(data);
      res.status(201).json({
        message: "Data created successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
  async getAll(req, res, next) {
    try {
      const result = await CruidService.getAll();
      res.status(200).json({
        message: "Data retrieved successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CrudTestController();
