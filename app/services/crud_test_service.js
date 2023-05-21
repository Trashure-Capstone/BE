const CrudTestRepostiory = require("../repositories/crud_test_repository");

class CrudTestService {
  async create(data) {
    return CrudTestRepostiory.create(data);
  }
  async getAll() {
    return CrudTestRepostiory.getAll();
  }
}

module.exports = new CrudTestService();
