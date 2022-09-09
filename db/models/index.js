'use strict';
// These lines makes "require" available
import { createRequire } from 'module';
const require = createRequire(import.meta.url)

const fs = require('fs');
const path = require('path');
import { fileURLToPath } from 'url';
const Sequelize = require('sequelize');
const __filename = fileURLToPath(import.meta.url)
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const __dirname = path.dirname(__filename);
import configs from '../config/config.js'
const config = configs[env]
const db = {};

const  sequelize = new Sequelize(config.database, config.username, config.password, config);


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
