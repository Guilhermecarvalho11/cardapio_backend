require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "dbcardapio_m6ph_user",
    password: process.env.DB_PASSWORD || "tGy9w3cmuFx9Rg2Vv1zQcNwKIKzYomt8",
    database: process.env.DB_NAME,
    host:
      process.env.DB_HOST ||
      "dpg-crovci08fa8c73dq4570-a.oregon-postgres.render.com",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: process.env.DB_USER || "dbcardapio_m6ph_user",
    password: process.env.DB_PASSWORD || "tGy9w3cmuFx9Rg2Vv1zQcNwKIKzYomt8",
    database: process.env.DB_NAME,
    host:
      process.env.DB_HOST ||
      "dpg-crovci08fa8c73dq4570-a.oregon-postgres.render.com",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    username: process.env.DB_USER || "dbcardapio_m6ph_user",
    password: process.env.DB_PASSWORD || "tGy9w3cmuFx9Rg2Vv1zQcNwKIKzYomt8",
    database: process.env.DB_NAME,
    host:
      process.env.DB_HOST ||
      "dpg-crovci08fa8c73dq4570-a.oregon-postgres.render.com",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false,
      },
    },
  },
};
