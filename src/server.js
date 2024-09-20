const path = require("path");
require("dotenv").config();
require("express-async-errors");
const connectionDB = require("./database/mySQL");
const cors = require("cors");

const AppError = require("./utils/AppError");

const express = require("express");
const routes = require("./routes");

const app = express();

app.use("/uploads", express.static(path.resolve(__dirname, "tmp", "uploads")));

app.use(cors());
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

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
