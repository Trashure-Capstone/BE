const { user, role } = require("../models");

class UserRepository {
  async getUserById(id) {
    return user.findOne({ where: { id } });
  }
  async getUserByEmail(email) {
    return user.findOne({
      where: {
        email: email,
      },
      include: [
        {
          model: role,
          attributes: ["name"],
        },
      ],
    });
  }
  async newUser(data) {
    return user.create(data);
  }
  async updateUser(id, data) {
    return user.update(data, {
      where: {
        id: id,
      },
    });
  }
  async getUserRefreshToken(resetToken) {
    return user.findOne({
      where: {
        resetToken: resetToken,
      },
    });
  }
}

module.exports = new UserRepository();
