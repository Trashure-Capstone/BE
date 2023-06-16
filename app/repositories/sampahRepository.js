const { sampah } = require("../models");

class SampahRepository {
  async createNewSampah(data) {
    return await sampah.create(data);
  }
  async getAllSampah() {
    return await sampah.findAll();
  }
  async getSampahById(id) {
    return await sampah.findOne({
      where: {
        id: id,
      },
    });
  }
  async getSampahByName(name) {
    return await sampah.findOne({
      where: {
        nama: name,
      },
    });
  }
  async updateSampah(data, id) {
    return await sampah.update(data, {
      where: {
        id: id,
      },
    });
  }
  async deleteSampah(id) {
    return await sampah.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new SampahRepository();
