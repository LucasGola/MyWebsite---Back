
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ViewersLogs extends Model {
    static associate(models) {
      this.belongsTo(models.Viewers, { foreignKey: 'viewerId', targetKey: 'id' });
      this.belongsTo(models.Users, { foreignKey: 'userId', targetKey: 'id' });
    }
  }
  ViewersLogs.init({
    status: DataTypes.ENUM('New Viewer', 'Viewer Answered'),
    viewerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ViewersLogs',
  });
  return ViewersLogs;
};