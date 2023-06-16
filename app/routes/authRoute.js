const router = require("express").Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post(
  '/reset-password',
  authMiddleware.verifyToken,
  authController.resetPassword
);
router.post(
  "/check-token",
  authMiddleware.verifyToken,
  authController.checkToken
);
router.post("/logout", authController.logout);
router.post('/id:', authController.logout);

module.exports = router;
