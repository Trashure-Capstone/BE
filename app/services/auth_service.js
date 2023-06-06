const UsersRepository = require('../repositories/user_repository.js');

class UsersService {
  async create(data) {
    return UsersRepository.create(data);
  }
  async findAll() {
    return UsersRepository.findAll();
  }
  async findOne(options) {
    return UsersRepository.findOne(options);
  }
  async update(data, options) {
    return UsersRepository.update(data, options);
  }
}

module.exports = new UsersService();
