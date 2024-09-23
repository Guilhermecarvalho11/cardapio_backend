require("dotenv").config();

module.exports = {
  jwt: {
    secret: "default",
    expiresIn: "1d",
  },
};
