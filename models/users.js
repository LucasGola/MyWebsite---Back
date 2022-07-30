module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        username: DataTypes.STRING,
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        createdAt: DataTypes.DATE,
    }, { paranoid: true });
};