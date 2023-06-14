const bcrypt = require("bcryptjs");

async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

async function comparePasswords(password, hash) {
  return bcrypt.compare(password, hash);
}

async function checkPasswordFormat(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}

module.exports = {
  hashPassword,
  comparePasswords,
  checkPasswordFormat,
};
