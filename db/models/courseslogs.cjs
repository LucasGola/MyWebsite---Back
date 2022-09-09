'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoursesLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Courses, { foreignKey: 'courseId', targetKey: 'id' });
      this.belongsTo(models.Users, { foreignKey: 'userId', targetKey: 'id' });
    }
  }
  CoursesLogs.init({
    status: DataTypes.ENUM('New Course', 'Course Rate Up', 'Course Rate Down', 'Course Completed', 'Course Deleted'),
    courseId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CoursesLogs',
  });
  return CoursesLogs;
};