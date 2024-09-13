"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("menu_items", "name", {
      type: Sequelize.STRING(50),
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("menu_items", "name", {
      type: Sequelize.STRING(255),
      allowNull: false,
    });
  },
};
