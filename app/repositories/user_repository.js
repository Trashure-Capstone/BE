const { Users } = require('../models/');

class User {
  async create(data) {
    return Users.create(data);
  }
  async findAll() {
    return Users.findAll();
  }
  async findOne(options) {
    return Users.findOne(options);
  }
  async update(data, params) {
    return Users.update(data, params);
  }
}

module.exports = new User();
