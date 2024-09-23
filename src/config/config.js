require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    dialect: "postgres", // Alterado para PostgreSQL
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    port: process.env.DB_PORT || 5432,
    dialectOptions: {
      ssl: {
        require: true, // Habilita a conexão SSL
        rejectUnauthorized: false, // Pode ser definido como true se você tiver um certificado
      },
    },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    dialect: "postgres", // Alterado para PostgreSQL
    port: process.env.DB_PORT || 5432,
    dialectOptions: {
      ssl: {
        require: true, // Habilita a conexão SSL
        rejectUnauthorized: false, // Pode ser definido como true se você tiver um certificado
      },
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOST,
    dialect: "postgres", // Alterado para PostgreSQL
    port: process.env.DB_PORT || 5432,
    dialectOptions: {
      ssl: {
        require: true, // Habilita a conexão SSL
        rejectUnauthorized: false, // Pode ser definido como true se você tiver um certificado
      },
    },
  },
};
