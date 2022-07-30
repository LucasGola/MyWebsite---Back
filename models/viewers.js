module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Viewers', {
        name: DataTypes.STRING,
        channel: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        linkedin: DataTypes.STRING,
        message: DataTypes.STRING,
        insertedAt: DataTypes.DATE,
        answeredAt: DataTypes.DATE,
    });
};