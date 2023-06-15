const sampahRepository = require("../repositories/sampahRepository");

class SampahService {
  async createNewSampah(data) {
    return await sampahRepository.createNewSampah(data);
  }
  async getAllSampah() {
    return await sampahRepository.getAllSampah();
  }
  async updateSampah(data, id) {
    return await sampahRepository.updateSampah(data, id);
  }
  async getSampahById(id) {
    return await sampahRepository.getSampahById(id);
  }

  async deleteSampah(id) {
    return await sampahRepository.deleteSampah(id);
  }
}

module.exports = new SampahService();
