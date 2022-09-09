'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('errorsLogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      module: {
        type: Sequelize.STRING
      },
      error: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('errorsLogs');
  }
};