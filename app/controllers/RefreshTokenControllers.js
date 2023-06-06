const UsersService = require('../services/auth_service.js');
const jwt = require('jsonwebtoken');

class Refresh_Token{
  async getRefreshToken (req, res, next) {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken) return res.status(401);
      const user = await UsersService.findAll({
        where: { refresh_Token: refreshToken },
      });
      if (!user[0]) return res.status(403);
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403);
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign(
          { userId, name, email },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '15s' }
        );
        res.status(200).json({ accessToken });
      });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = new Refresh_Token();
