const { DataTypes } = require("sequelize");
const sequelize = require("../database/mySQL/index");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "client"),
      allowNull: false,
      defaultValue: "client",
    },
  },
  {
    tableName: "users",
    timestamps: true,
    underscored: true,
  }
);

module.exports = User;
