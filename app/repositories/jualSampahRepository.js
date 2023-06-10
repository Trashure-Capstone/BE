const { jual_sampah } = require("../models");

class JualSampahRepository {
  async createJualSampah(data) {
    return await jual_sampah.create(data);
  }
  async getAllJualSampah() {
    return await jual_sampah.findAll();
  }
  async getJualSampahById(id) {
    return await jual_sampah.findOne({
      where: {
        id: id,
      },
    });
  }
  async updateJualSampah(id, data) {
    return await jual_sampah.update(data, {
      where: {
        id: id,
      },
    });
  }
  async deleteJualSampah(id) {
    return await jual_sampah.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new JualSampahRepository();
