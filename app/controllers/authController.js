const UsersService = require('../services/auth_service.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      // check email exist in database
      const emailExist = await UsersService.findOne({
        where: { email: email },
      });
      if (emailExist) {
        return res.status(400).json({
          error: true,
          message: 'Email already exists',
        });
      }
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const data = {
        name: name,
        email: email,
        password: hashedPassword,
        role: 0,
      };
      const result = await UsersService.create(data);
      res.status(201).json({
        error: false,
        message: 'User created',
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  }

  async Login(req, res) {
    try {
      const user = await UsersService.findAll({
        where: { email: req.body.email },
      });
      const validPass = await bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (!validPass)
        return res.status(400).json({ error: 'Invalid password' });
      const userId = user[0].id;
      const name = user[0].name;
      const email = user[0].email;
      const accessToken = jwt.sign(
        { userId, name, email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30d' }
      );
      // const refreshToken = jwt.sign(
      //   { userId, name, email },
      //   process.env.REFRESH_TOKEN_SECRET,
      //   { expiresIn: '1d' }
      // );
      await UsersService.update(
        { refresh_Token: accessToken },
        { where: { id: userId } }
      );
      res.json({
        error: false,
        message: 'successfully logged in',
        login_result: {
          userId: userId,
          name: name,
          email: email,
          accessToken: accessToken,
        },
      });
    } catch (error) {
      res.status(404).json({ msg: 'email not found' });
    }
  }

  async Logout(req, res) {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken) return res.status(204);
      const user = await UsersService.getAll({
        where: { refresh_Token: refreshToken },
      });
      if (!user[0]) return res.status(204);
      const userId = user[0].id;
      await UsersService.update(
        { refresh_Token: null },
        { where: { id: userId } }
      );
      res.clearCookie('refreshToken');
      res.status(200).json({
        error: false,
        msg: 'User logged out',
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = new UserController();
