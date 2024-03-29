const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    static associate(models) {
      this.hasMany(models.CoursesLogs, { foreignKey: 'courseId' });
    }
  }
  Courses.init({
    name: DataTypes.STRING,
    platform: DataTypes.STRING,
    link: DataTypes.STRING,
    duration: DataTypes.INTEGER,
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