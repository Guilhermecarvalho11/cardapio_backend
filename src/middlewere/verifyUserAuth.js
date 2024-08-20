const AppError = require("../utils/AppError");

function verifyUserAuth(roleToVerify) {
  return (req, res, next) => {
    const { role } = req.user;
    console.log("Role no ensureAdmin:", role);

    if (role !== roleToVerify) {
      throw new AppError("Unauthorized", 401);
    }

    return next();
  };
}

module.exports = verifyUserAuth;
