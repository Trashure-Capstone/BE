const userRepository = require("../repositories/userRepository");

class UserService {
  async getUserById(id) {
    return userRepository.getUserById(id);
  }
  async getUserByEmail(email) {
    return userRepository.getUserByEmail(email);
  }
  async newUser(data) {
    return userRepository.newUser(data);
  }
  async updateUser(id, data) {
    return userRepository.updateUser(id, data);
  }
  async getUserRefreshToken(resetToken) {
    return userRepository.getUserRefreshToken(resetToken);
  }
}

module.exports = new UserService();
