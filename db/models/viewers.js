
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Viewers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    answeredAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Viewers',
    paranoid: true,
  });
  return Viewers;
};