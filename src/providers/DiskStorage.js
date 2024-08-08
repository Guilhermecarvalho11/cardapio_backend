const fs = require("fs");
const path = require("path");
const upLoadConfig = require("../config/upload");

class diskStorage {
  async salveFile(file) {
    await fstat.promises.rename(
      path.resolve(upLoadConfig.TMP_FOLDER, file),
      path.resolve(upLoadConfig.UPLOADS_FOLDER, file)
    );

    return file;
  }

  async deleteFile(file) {
    const filePath = path.resolve(upLoadConfig.UPLOADS_FOLDER, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

module.exports = diskStorage;
