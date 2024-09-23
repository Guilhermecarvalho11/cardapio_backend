const { Sequelize } = require("sequelize");
require("dotenv").config();
const config = require("../../config/config")[
  process.env.NODE_ENV || "development"
];

console.log("Configuração carregada:", config);
console.log("node", process.env.NODE_ENV);

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true, // Apenas para ambientes de desenvolvimento
      },
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
