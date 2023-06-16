require('dotenv').config();
const {
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
} = require('./config');

module.exports = {
  development: {
    username: process.env.DB_USERNAME || DB_USERNAME,
    password: process.env.DB_PASSWORD || DB_PASSWORD,
    database: process.env.DB_NAME || DB_DATABASE,
    host: process.env.DB_HOST || DB_HOST,
    dialect: process.env.DB_DIALECT || DB_DIALECT,
  },
  test: {
    username: 'root',
    password: '',
    database: 'trashure',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: '',
    password: 'p#M~(;N#+;Vte#go',
    database: 'trashure',
    host: '34.101.42.85',
    dialect: 'mysql',
  },
};
