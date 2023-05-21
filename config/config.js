require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3005,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: process.env.DB_PORT || "3306",
  DB_DATABASE: process.env.DB_NAME || "erp_db_fixed_asset",
  DB_USERNAME: process.env.DB_USERNAME || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  DB_DIALECT: process.env.DB_DIALECT || "mysql",
};
