const sequelize = require("./database/postgres");
const path = require("path");
require("dotenv").config();
require("express-async-errors");
const connectionDB = require("./database/postgres");
const cors = require("cors");

const AppError = require("./utils/AppError");
const express = require("express");
const routes = require("./routes");

const app = express();

// Configuração de CORS para permitir apenas a URL do frontend
const allowedOrigins = [
  "https://seu-frontend-url.vercel.app", // Substitua pela URL do seu frontend
  "http://localhost:3000", // Para desenvolvimento local
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Métodos permitidos
    credentials: true, // Se necessário, permite cookies e autenticação
  })
);

app.use("/uploads", express.static(path.resolve(__dirname, "tmp", "uploads")));
app.use(express.json());
app.use(routes);

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.log(error);

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const runMigrations = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Tabelas geradas com sucesso.");
  } catch (error) {
    console.error("Erro ao rodar as migrations:", error);
  }
};

const PORT = process.env.SERVER_PORT;

(async () => {
  await runMigrations();
  app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
  });
})();
