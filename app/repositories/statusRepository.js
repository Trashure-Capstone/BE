const { status } = require("../models");

class Status {
  async createStatus(data) {
    return await status.create(data);
  }

  async updateStatusName(data, id) {
    return await status.update(data, {
      where: {
        id: id,
      },
    });
  }
  async getAllStatus() {
    return await status.findAll();
  }
  async getStatusById(id) {
    return await status.findOne({
      where: {
        id: id,
      },
    });
  }
  async deleteStatus(id) {
    return await status.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new Status();
