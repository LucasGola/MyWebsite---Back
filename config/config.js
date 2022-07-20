const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  appPort: process.env.APP_PORT,
  sqlserver: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    operatorsAliases: false,
    logging: false,
    define: {
      timestamps: true,
    },
    dialectOptions: {
      options: {
        enableArithAbort: false,
      },
    },
    pool: {
      max: 30,
      min: 0,
      acquire: 20000,
      idle: 20000,
    },
  }
};
