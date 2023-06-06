const CrudTestController = require("../controllers/crud_test_controller");
const CrudTestRoute = require("express").Router();

CrudTestRoute.post("/", CrudTestController.create);
CrudTestRoute.get('/', CrudTestController.getAll);

module.exports = CrudTestRoute;
