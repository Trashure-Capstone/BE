const userService = require("../services/userService");

class UserController {
  async getUser(req, res) {
    const userId = req.params.id;

    try {
      const user = await userService.getUserById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
