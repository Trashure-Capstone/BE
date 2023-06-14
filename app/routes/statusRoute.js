const statusController = require("../controllers/statusController");
const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware.verifyToken, statusController.getAllStatus);
router.post("/", statusController.createStatus);
router.put("/:id", statusController.updateStatusName);
router.delete("/:id", statusController.deleteStatus);

module.exports = router;
