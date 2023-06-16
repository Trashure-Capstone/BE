const statusController = require("../controllers/statusController");
const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get('/', authMiddleware.verifyToken, authMiddleware.verifySuperAdmin, statusController.getAllStatus);
router.post(
  '/',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  statusController.createStatus
);
router.put("/:id", authMiddleware.verifyToken, authMiddleware.verifySuperAdmin, statusController.updateStatusName);
router.delete(
  '/:id',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  statusController.deleteStatus
);

module.exports = router;
