const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/config");

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // check if token not exist
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  // verify token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.user = decoded;
    next();
  });
};

// ngecek super admin
exports.verifySuperAdmin = (req, res, next) => {
  if (req.user.role !== "Super Admin") {
    return res.status(403).send({
      message: "Require Super Admin Role!",
    });
  }
  next();
};
