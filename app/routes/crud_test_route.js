const CrudTestController = require("../controllers/crud_test_controller");
const router = require("express").Router();

router.post("/", CrudTestController.create);
router.get("/", CrudTestController.getAll);

module.exports = router;
