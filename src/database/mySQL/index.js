const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.log("Erro ao conectar ao MySQL: ", err);
    return;
  }
  console.log("Conectado ao MySQL");
});

module.exports = connection;
