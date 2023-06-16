const router = require("express").Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/:id", authMiddleware.verifyToken, authMiddleware.verifySuperAdmin, userController.getUserById);
router.put(
  '/:id',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  userController.updateUser
);

module.exports = router;
