const mysql = require("mysql2");
require("dotenv").config();

const connectionDB = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

connectionDB.connect((err) => {
  if (err) {
    console.log("Erro ao conectar ao MySQL: ", err);
    return;
  }
  console.log(`Conectado no MySQL`);
});

module.exports = connectionDB;
