const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

// Diretórios de armazenamento
const TMP_FOLDER = path.resolve(__dirname, "..", "tmp");
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads");

// Configuração do Multer
const MULTER = {
  storage: multer.diskStorage({
    destination: UPLOADS_FOLDER, // Diretório final onde os arquivos serão armazenados
    filename(req, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};

module.exports = {
  UPLOADS_FOLDER,
  MULTER,
};
