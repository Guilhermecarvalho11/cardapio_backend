"use strict";

const { QueryInterface } = require("sequelize");
const { Sequelize } = require(".");
const { down } = require("../migrations/20240805200421-create-users-table");

module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTeable("users", {
      id: {
        type: Sequelize.INTEGER,
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allownull: false,
      },
      email: {
        type: Sequelize.STRING,
        allownull: false,
      },
      password: {
        type: Sequelize.STRING,
        allownull: false,
      },
      role: {
        type: Sequelize.ENUM("admin", "client"),
        allownull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allownull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allownull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (QueryInterface, Sequelize) => {
    await QueryInterface.dropTable("users");
  },
};
