const jualSampahRepository = require('../repositories/jualSampahRepository');
const { generateSalesId } = require('../utils/generateId');
const userRepository = require('../repositories/userRepository');
const sampahRepository = require('../repositories/sampahRepository');
const ImgUpload = require('../utils/uploadImg');

class JualSampahService {
  async createJualSampah(data) {
    data.id = generateSalesId();
    const sampah = await sampahRepository.getSampahById(data.id_sampah);
    const jualSampah = await jualSampahRepository.createJualSampah({
      id: data.id,
      id_status: 1,
      total_harga: data.berat_sampah * sampah.price,
      ...data,
    });
    return jualSampah;
  }
  async getAllJualSampah() {
    return await jualSampahRepository.getAllJualSampah();
  }
  async getJualSampahById(id) {
    return await jualSampahRepository.getJualSampahById(id);
  }
  async updateJualSampah(id, data) {
    const updateData = await jualSampahRepository.updateJualSampah(id, data);
    const getSampahIni = await jualSampahRepository.getJualSampahById(id);
    console.log(getSampahIni.id_user);
    const idUser = getSampahIni.id_user;
    if (data.id_status === 3) {
      console.log('true');
      const user = await userRepository.getUserById(idUser);
      console.log(user);
      await userRepository.updateUser(idUser, {
        points: user.points + 100 * getSampahIni.berat_sampah,
      });
    }
    return updateData;
  }
  async deleteJualSampah(id) {
    return await jualSampahRepository.deleteJualSampah(id);
  }
}

module.exports = new JualSampahService();
