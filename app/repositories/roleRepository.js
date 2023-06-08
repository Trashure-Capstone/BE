const { role } = require("../models");

class Role {
  async getAllRole() {
    return await role.findAll();
  }
  async getRoleById(id) {
    return await role.findOne({ where: { id: id } });
  }
  async createRole(data) {
    return await role.create(data);
  }
  async updateRole(id, data) {
    return await role.update(data, { where: { id: id } });
  }
  async deleteRole(id) {
    return await role.destroy({ where: { id: id } });
  }
}

module.exports = new Role();
