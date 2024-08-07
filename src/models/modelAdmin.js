const { DataTypes } = require("sequelize");
const sequelize = require("../database/mySQL/index");

const admin = sequelize.define("Admin", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
