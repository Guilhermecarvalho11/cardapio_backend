const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../config/jwtConfig");

function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log("authHeader", authHeader);

  if (!authHeader) {
    throw new AppError("JWT não informado", 401);
  }

  const [, token] = authHeader.split(" ");
  console.log("Token recebido:", token);

  try {
    const { role, sub: user_id } = verify(token, authConfig.jwt.secret);
    console.log("Role decodificada:", role);
    console.log("User ID decodificado:", user_id);

    req.user = {
      id: Number(user_id),
      role,
    };

    return next();
  } catch (error) {
    console.error("Erro na validação do token JWT:", error);
    throw new AppError("JWT Token inválido", 401);
  }
}

module.exports = ensureAuthenticated;
