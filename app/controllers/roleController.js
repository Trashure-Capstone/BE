const roleService = require("../services/roleService");

class RoleController {
  async getAllRole(req, res) {
    try {
      const data = await roleService.getAllRole();
      res.status(200).json({
        error: false,
        message: "Successfully get all role",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.Message,
      });
    }
  }

  async getRoleById(req, res) {
    try {
      const data = await roleService.getRoleById(req.params.id);
      res.status(200).json({
        error: false,
        message: "success get role by id",
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.Message,
      });
    }
  }

  async createRole(req, res) {
    try {
      const data = await roleService.createRole(req.body);
      res.status(201).json({
        error: false,
        message: "success add role",
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        Message: error.Message,
      });
    }
  }

  async updateRole(req, res) {
    try {
      const data = await roleService.updateRole(req.params.id, req.body);
      res.status(200).json({
        error: false,
        message: "success update role",
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.Message,
      });
    }
  }

  async deleteRole(req, res) {
    try {
      const data = await roleService.deleteRole(req.params.id);
      res.status(200).json({
        error: false,
        message: "success delete role"
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        Message: error.Message,
      });
    }
  }
}

module.exports = new RoleController();
