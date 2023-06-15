const { jual_sampah } = require("../models");

class JualSampahRepository {
  async createJualSampah(data) {
    return await jual_sampah.create(data);
  }
  async getAllJualSampah(id_user) {
    return await jual_sampah.findAll({
      where: {id_user: id_user},
      order: [["updatedAt", "DESC"]],
    });
  }
  async getJualSampahById(id_sampah) {
    return await jual_sampah.findOne({
      where: {
        id: id_sampah,
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
