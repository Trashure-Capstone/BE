const statusRepository = require("../repositories/statusRepository");

class StatusService {
  async createStatus(data) {
    return await statusRepository.createStatus(data);
  }
  async getAllStatus() {
    return await statusRepository.getAllStatus();
  }
  async getStatusById(id) {
    return await statusRepository.getStatusById(id);
  }
  async updateStatusName(id, data) {
    return await statusRepository.updateStatusName(id, data);
  }
  async deleteStatus(id) {
    return await statusRepository.deleteStatus(id);
  }
}

module.exports = new StatusService();
