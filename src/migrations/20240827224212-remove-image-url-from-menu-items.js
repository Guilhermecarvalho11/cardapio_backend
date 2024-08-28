"use strict";

/** @type {import('sequelize-cli').Migration} */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove a coluna imageUrl se ela existir
    await queryInterface.removeColumn("menu_items", "imageUrl");
  },

  down: async (queryInterface, Sequelize) => {
    // Adiciona a coluna imageUrl de volta caso seja necessário reverter
    await queryInterface.addColumn("menu_items", "imageUrl", {
      type: Sequelize.STRING,
      allowNull: true, // ou false, dependendo da sua necessidade
    });
  },
};
