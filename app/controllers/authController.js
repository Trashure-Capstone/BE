const userService = require("../services/userService");
const passwordUtils = require("../utils/passwordUtils");
const authUtils = require("../utils/authUtils");
const roleService = require("../services/roleService");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check email and password empty
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Email and password required",
        data: {},
      });
    }
    // Validasi email format
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: "error",
        message: "Invalid email format",
        data: {},
      });
    }
    // Check password format
    const isPasswordFormatValid = await passwordUtils.checkPasswordFormat(
      password
    );
    if (!isPasswordFormatValid) {
      return res.status(400).json({
        status: "error",
        message:
          "Password must be at least 8 characters long, contain uppercase, lowercase, number and symbol",
        data: {},
      });
    }
    //check if email already registered
    const user = await userService.getUserByEmail(email);
    if (user) {
      return res.status(400).json({
        status: "error",
        message: "Email already registered",
        data: {},
      });
    }
    // hash password
    const hashedPassword = await passwordUtils.hashPassword(password);
    const roleId = 1;

    const newUser = await userService.newUser({
      roleId: roleId,
      name: name,
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: {},
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check email and password is not empty'
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Email and password is required",
        data: {},
      });
    }
    // check if email already exist
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "Email is not exist",
        data: {},
      });
    }
    // check password
    const isMatch = await passwordUtils.comparePasswords(
      password,
      user.password
    );
    if (!isMatch) {
      return res.status(400).json({
        status: "error",
        message: "Password is incorrect",
        data: {},
      });
    }
    // generate token
    const token = await authUtils.generateToken(user);
    res.status(200).json({
      status: "success",
      message: "User login successfully",
      data: {
        token: token,
        user: user,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: {},
    });
  }
};
// just check token
exports.checkToken = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "User login successfully",
      data: {
        user: req.user,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: {},
    });
  }
};
exports.logout = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "User logout successfully",
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: {},
    });
  }
};

//reset password
exports.resetPassword = async (req, res) => {
  try {
    const { password, token } = req.body;

    // check password is not empty
    if (!password) {
      return res.status(400).json({
        status: "error",
        message: "Password is required",
        data: {},
      });
    }

    // check password format
    const isPasswordFormatValid = await passwordUtils.checkPasswordFormat(
      password
    );
    if (!isPasswordFormatValid) {
      return res.status(400).json({
        status: "error",
        message: "Password format is invalid",
        data: {},
      });
    }

    // check token is not empty
    if (!token) {
      return res.status(400).json({
        status: "error",
        message: "Token is required",
        data: {},
      });
    }

    // decode token
    const decoded = await authUtils.decodeToken(token);
    if (!decoded) {
      return res.status(400).json({
        status: "error",
        message: "Token is invalid",
        data: {},
      });
    }

    // get user by email
    const user = await userService.getUserByEmail(decoded.email);
    if (user.resetToken !== token) {
      return res.status(400).json({
        status: "error",
        message: "Token is invalid",
        data: {},
      });
    }

    // hash password
    const hashPassword = await passwordUtils.hashPassword(password);

    // update password
    await userService.updateUser(decoded.id, { password: hashPassword });

    res.status(200).json({
      status: "success",
      message: "Password reset successfully",
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: {},
    });
  }
};
// logout
exports.logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(400).json({
        status: "error",
        message: "Refresh token is required",
        data: {},
      });
    }
    const user = await userService.getUserRefreshToken(refreshToken);
    if (!user) {
      return res.status(204);
    }
    await userService.update({ id: user.id, resetToken: null });
    res.clearCookie("refreshToken");
    res.status(200).json({
      status: "success",
      message: "User logout successfully",
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: {},
    });
  }
};
