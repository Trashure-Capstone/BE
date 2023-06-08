const roleRepository = require("../repositories/roleRepository");

class RoleService {
  async getAllRole() {
    return await roleRepository.getAllRole();
  }

  async getRoleById(id) {
    return await roleRepository.getRoleById(id);
  }

  async createRole(data) {
    return await roleRepository.createRole(data);
  }

  async updateRole(id, data) {
    return await roleRepository.updateRole(id, data);
  }

  async deleteRole(id) {
    return await roleRepository.deleteRole(id);
  }
}

module.exports = new RoleService();
