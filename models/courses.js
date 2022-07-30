module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Courses', {
        name: DataTypes.STRING,
        platform: DataTypes.STRING,
        link: DataTypes.STRING,
        completed: DataTypes.INTEGGER,
        insertedAt: DataTypes.DATE,
        ratingUp: DataTypes.INTEGGER,
        ratingDown: DataTypes.INTEGGER,
    }, { paranoid: true });
};