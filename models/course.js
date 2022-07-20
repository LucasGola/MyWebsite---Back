module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define('Courses', {
        name: DataTypes.STRING,
        platform: DataTypes.STRING,
        link: DataTypes.STRING,
        completed: DataTypes.BOOLEAN,
        insertTimestamp: DataTypes.DATE
        insertedAt: DataTypes.DATE
        rating: DataTypes.DATE
    }, { paranoid: true });

    
};