require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
    timezone: '-03:00',
    logging: false
  },
  test: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
    timezone: '-03:00',
    logging: true
  },
  production: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
    timezone: '-03:00',
    logging: true
  }
};