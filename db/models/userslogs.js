
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersLogs extends Model {
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: 'userId', targetKey: 'id' });
      this.belongsTo(models.Users, { foreignKey: 'adminId', targetKey: 'id' });
    }
  }
  UsersLogs.init({
    status: DataTypes.ENUM('User Login', 'User Logout', 'User Created', 'User Deleted'),
    userId: DataTypes.INTEGER,
    adminId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UsersLogs',
  });
  return UsersLogs;
};