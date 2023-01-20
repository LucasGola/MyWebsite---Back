
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Viewers extends Model {
    static associate(models) {
      this.hasMany(models.ViewersLogs, { foreignKey: 'viewerId' });
    }
  }
  Viewers.init({
    name: DataTypes.STRING,
    channel: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    message: DataTypes.STRING,
    repliedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Viewers',
    paranoid: true,
  });
  return Viewers;
};