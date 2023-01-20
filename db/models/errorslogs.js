
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class errorsLogs extends Model {
    static associate(models) {
    }
  }
  errorsLogs.init({
    module: DataTypes.STRING,
    error: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'errorsLogs',
  });
  return errorsLogs;
};