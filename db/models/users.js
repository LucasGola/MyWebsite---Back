
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CoursesLogs, { foreignKey: 'userId' });
      this.hasMany(models.UsersLogs, { foreignKey: 'userId' });
      this.hasMany(models.UsersLogs, { foreignKey: 'newUserId' });
      this.hasMany(models.ViewersLogs, { foreignKey: 'userId' });
    }
  }
  Users.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
    paranoid: true,
  });
  return Users;
};