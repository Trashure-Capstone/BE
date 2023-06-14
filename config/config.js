require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3120,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: process.env.DB_PORT || "3306",
  DB_DATABASE: process.env.DB_NAME || "trashure",
  DB_USERNAME: process.env.DB_USERNAME || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  DB_DIALECT: process.env.DB_DIALECT || "mysql",
  JWT_SECRET: process.env.JWT_SECRET || "!Dfas1@3fa#4mFifafnuNDwm13nd23nFju@1",
};
