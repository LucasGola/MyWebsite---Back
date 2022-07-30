module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Logs', {
        event: DataTypes.ENUM(
            'User Login', 'User Logout', 'New User', 'User Deleted',
            'New Course', 'Couse Rate Up', 'Couse Rate Down', 'Course Completed'
            'New Viewer', 'Viewer Contacted'
            ),
        userId: DataTypes.INTEGGER,
        courseId: DataTypes.INTEGGER,
        viewerId: DataTypes.INTEGGER,
        dateTimestamp: DataTypes.DATE,
    });
    Logs.associate = (models) => {
        Logs.belongsTo(models.Users, {
            foreignKey: 'userId',
            targetKey: 'id',
        });
        Logs.belongsTo(models.Courses, {
            foreignKey: 'courseId',
            targetKey: 'id',
        });
        Logs.belongsTo(models.Viewers, {
            foreignKey: 'viewerId',
            targetKey: 'id',
        });
    };
};