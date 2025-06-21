// handle error, the function can be expanded by checking mode(production or development), for btoh chec if it is operational error
// operationl error is error that we can predict
// Also the function can handle ValidationErrorDB, JsonWebTokenError and more..

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Something went wrong!",
    });
  }
};
