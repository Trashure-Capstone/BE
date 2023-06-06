const UserController = require('../controllers/authController.js');
const Refresh_Token = require('../controllers/RefreshTokenControllers.js');
const { verifyToken } = require('../middleware/verifyToken.js');
const router_auth = require('express').Router();

// router_auth.get('/users', verifyToken, getAllUsers);
router_auth.post('/createUser', UserController.createUser);
router_auth.post('/login', UserController.Login);
router_auth.post('/token', Refresh_Token.getRefreshToken);
router_auth.delete('/logout', UserController.Logout);

module.exports = router_auth;
