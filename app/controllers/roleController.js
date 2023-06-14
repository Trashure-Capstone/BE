const roleService = require("../services/roleService");

class RoleController {
  async getAllRole(req, res) {
    try {
      const data = await roleService.getAllRole();
      res.status(200).json({
        data: data,
        message: "Successfully get all role",
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  }

  async getRoleById(req, res) {
    try {
      const data = await roleService.getRoleById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  }

  async createRole(req, res) {
    try {
      const data = await roleService.createRole(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  }

  async updateRole(req, res) {
    try {
      const data = await roleService.updateRole(req.params.id, req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  }

  async deleteRole(req, res) {
    try {
      const data = await roleService.deleteRole(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  }
}

module.exports = new RoleController();
