const router = require("express").Router();
const roleController = require("../controllers/roleController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", roleController.getAllRole);
router.get("/:id", roleController.getRoleById);
router.post("/", roleController.createRole);
router.put("/:id", roleController.updateRole);
router.delete("/:id", roleController.deleteRole);

module.exports = router;
