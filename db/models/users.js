
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      this.hasMany(models.CoursesLogs, { foreignKey: 'userId' });
      this.hasMany(models.UsersLogs, { foreignKey: 'userId' });
      this.hasMany(models.UsersLogs, { foreignKey: 'adminId' });
      this.hasMany(models.ViewersLogs, { foreignKey: 'userId' });
    }
  }
  Users.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    email: DataTypes.STRING,
    permission: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
    paranoid: true,
  });
  return Users;
};