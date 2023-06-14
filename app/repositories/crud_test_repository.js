const { crud_test } = require("../models/");

class CrudTest {
  async create(data) {
    return crud_test.create(data);
  }
  async getAll() {
    return crud_test.findAll();
  }
}

module.exports = new CrudTest();