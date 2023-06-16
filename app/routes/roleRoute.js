const router = require("express").Router();
const roleController = require("../controllers/roleController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware.verifyToken, authMiddleware.verifySuperAdmin, roleController.getAllRole);
router.get(
  '/:id',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  roleController.getRoleById
);
router.post(
  '/',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  roleController.createRole
);
router.put(
  '/:id',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  roleController.updateRole
);
router.delete(
  '/:id',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  roleController.deleteRole
);

module.exports = router;
