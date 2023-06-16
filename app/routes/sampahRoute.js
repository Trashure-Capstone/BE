const router = require("express").Router();
const sampahController = require("../controllers/sampahController");

router.get(
  '/',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  sampahController.getAllSampah
);
router.get(
  '/:id',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  sampahController.getSampahById
);
router.get(
  '/name/:name',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  sampahController.getSampahByName
);
router.post(
  '/',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  sampahController.createNewSampah
);
router.put(
  '/:id',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  sampahController.updateSampah
);
router.delete(
  '/:id',
  authMiddleware.verifyToken,
  authMiddleware.verifySuperAdmin,
  sampahController.deleteSampah
);


module.exports = router;
