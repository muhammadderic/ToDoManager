const errorHandler = (error, req, res, next) => {
  console.error(error);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode)
    .json({
      message: "Internal Server Error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    })
}

module.exports = errorHandler;