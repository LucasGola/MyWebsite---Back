
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ViewersLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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