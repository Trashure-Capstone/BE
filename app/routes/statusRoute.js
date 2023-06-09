const statusController = require("../controllers/statusController");
const router = require("express").Router();

router.get("/", statusController.getAllStatus);
router.post("/", statusController.createStatus);
router.put("/:id", statusController.updateStatusName);
router.delete("/:id", statusController.deleteStatus);

module.exports = router;
