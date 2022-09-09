'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CoursesLogs, { foreignKey: 'courseId' });
    }
  }
  Courses.init({
    name: DataTypes.STRING,
    platform: DataTypes.STRING,
    link: DataTypes.STRING,
    completed: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    rateUp: { type: DataTypes.INTEGER, defaultValue: 0 },
    rateDown: { type: DataTypes.INTEGER, defaultValue: 0 },
  }, {
    sequelize,
    modelName: 'Courses',
    paranoid: true,
  });
  return Courses;
};