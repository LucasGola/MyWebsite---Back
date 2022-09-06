'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      platform: {
        type: Sequelize.STRING,
      },
      link: {
        type: Sequelize.STRING,
      },
      completed: {
        allowNull: false,
        default: 0,
        type: Sequelize.BOOLEAN,
      },
      rateUp: {
        allowNull: false,
        default: 0,
        type: Sequelize.INTEGER
      },
      rateDown: {
        allowNull: false,
        default: 0,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses');
  }
};