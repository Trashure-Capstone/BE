const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/config");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role.name,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
};

const decodeToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = {
  generateToken,
  decodeToken,
};
