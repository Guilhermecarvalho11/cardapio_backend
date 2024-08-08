const { DataTypes } = require("sequelize");
const sequelize = require("../database/mySQL/index");

const Dishes = sequelize.define(
  "dishes",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "dishes",
    timestamps: true,
    underscored: true,
  }
);
