function ensureAuthenticated(err, req, res, next) {
  console.log("passou middlewere");
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
    next();
  }
}

module.exports = ensureAuthenticated;
